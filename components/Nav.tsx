"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

import logo from "@/public/icons/svg/mlt.promptopia.logo.favicon.svg";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { Path } from "@/interfaces/Path";
import { usePromptopiaContext } from "@/contexts/PromptopiaContext";

import IconImageBased from "./fragments/IconImageBased";
import { Skeleton } from "./ui/skeleton";

const providersIcons = ["google", "github"];

const Nav: React.FC = () => {
	const t = useTranslations("Nav");
	const { authProviders, session } = usePromptopiaContext();
	const [toggleDropDown, setToggleDropDown] = useState(false);
	const pathName = usePathname();
	const { isBelowSm } = useBreakpoint("sm");

	const openMobileNavBar = () => {
		setToggleDropDown((prevState) => !prevState);
	};

	const listLoginProviders = (
		<>
			{authProviders ? (
				Object.values(authProviders).map((provider) => {
					if (providersIcons.includes(provider.id)) {
						return (
							<button
								key={provider.name}
								aria-label={t("signInWith", { provider: provider.name })}
								className="login_provider_btn"
								type="button"
								onClick={() => signIn(provider.id)}
							>
								<IconImageBased icon={{ name: provider.id, size: 22 }} />
							</button>
						);
					}

					return (
						<button
							key={provider.name}
							className="_btn gray_invert "
							type="button"
							onClick={() => signIn(provider.id)}
						>
							{t("signIn")}
						</button>
					);
				})
			) : (
				<>
					<Skeleton className="login_provider_btn">
						<div className="w-[28px] h-[28px] rounded-full bg-mlt-gray-6" />
					</Skeleton>
					<Skeleton className="login_provider_btn">
						<div className="w-[28px] h-[28px] rounded-full bg-mlt-gray-5" />
					</Skeleton>
				</>
			)}
		</>
	);

	const profilePicture = (
		<div
			className={`flex justify-center items-center w-12 h-12 cursor-pointer rounded-full z-10  ${
				toggleDropDown ? "bg-white drop-shadow-sm" : "bg-white drop-shadow-md"
			}`}
			onClick={isBelowSm ? openMobileNavBar : undefined}
		>
			<Image
				alt={t("altUserProfile")}
				className="rounded-full"
				height={37}
				src={session?.user?.image ?? logo}
				width={37}
			/>
		</div>
	);

	return (
		<nav className="flex justify-between items-center w-full mb-16 pt-4 sm:pt-8 h-16">
			<Link
				className="flex justify-center items-center gap-1 hover:drop-shadow-md transition-all duration-300"
				href={pathName === Path.HOME ? `${Path.HOME}?wipe=true` : Path.HOME}
			>
				<Image
					alt={t("altLogo")}
					className="object-contain w-10 h-10"
					height={40}
					src={logo}
					width={40}
				/>
				<p className="logo_text relative">
					<span className="logo_text_str0">{t("logoSubText.str0")}</span>
					<span className="max-md:block max-md:absolute max-md:right-0 max-md:text-sm max-md:-bottom-4">
						<span className="logo_text_str1">.{t("logoSubText.str1")}</span>
						<span className="logo_text_str1">{t("logoSubText.str2")}</span>
						<span className="logo_text_str3">{t("logoSubText.str3")}</span>
					</span>
				</p>
			</Link>

			<div className="sm:flex hidden">
				<div className="flex justify-center items-center gap-3 md:gap-3">
					{session?.user ? (
						<>
							<Link className="_btn gray_invert " href={Path.POST_CREATE}>
								{t("createPrompt")}
							</Link>

							<button
								className="_btn gray_light"
								type="button"
								onClick={() => signOut({ callbackUrl: "/" })}
							>
								{t("signOut")}
							</button>

							<Link href={Path.PROFILE}>{profilePicture}</Link>
						</>
					) : (
						listLoginProviders
					)}
				</div>
			</div>

			<div className="sm:hidden flex relative">
				{session?.user ? (
					<div className="flex">
						{profilePicture}
						{toggleDropDown && (
							<div className="dropdown">
								<Link
									className="dropdown_link mt-3"
									href={Path.PROFILE}
									onClick={() => setToggleDropDown(false)}
								>
									{t("myProfile")}
								</Link>
								<Link
									className="dropdown_link"
									href={Path.POST_CREATE}
									onClick={() => setToggleDropDown(false)}
								>
									{t("createPrompt")}
								</Link>

								<button
									className="mt-2 w-full _btn gray_heavy_invert "
									type="button"
									onClick={() => {
										setToggleDropDown(false);
										signOut();
									}}
								>
									{t("signOut")}
								</button>
							</div>
						)}
					</div>
				) : (
					<div className="flex justify-center items-center gap-3 md:gap-3">
						{listLoginProviders}
					</div>
				)}
			</div>
		</nav>
	);
};

export default Nav;
