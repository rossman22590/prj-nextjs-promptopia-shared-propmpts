import React, { CSSProperties } from "react";

import { allColors, ThemeColorsList } from "@/interfaces/ThemeTW";

export type IconEmbSvgPathType =
	| "check-circle"
	| "check-square"
	| "radio"
	| "circle"
	| "square"
	| "tick"
	| "cloud"
	| "cloud-arrow-up"
	| "cloud-check"
	| "cloud-binary"
	| "clipboard"
	| "clipboard-check"
	| "tag"
	| "tags"
	| "up-right-from-square"
	| "link"
	| "message-lines"
	| "brush"
	| "trash"
	| "trash-check"
	| "broom-ball"
	| "broom"
	| "broom-wide"
	| "github";

/**
 * @param width Width of the SVG element
 * @param height Height of the SVG element
 * @param color1 Hex color code of the outer color
 * @param color2 Hex color code of the inner color
 * @param opacity1 Opacity of the outer color in hex
 * @param opacity2 Opacity of the inner color in hex
 * @param type Type of the SVG element: check, check-square...
 * @param cursor Cursor type: pointer, default, inherit
 * @returns SVG element
 */
interface IconEmbedSvgType {
	width?: number;
	height?: number;
	color1?: ThemeColorsList;
	color2?: ThemeColorsList;
	opacity1?: string;
	opacity2?: string;
	type?: IconEmbSvgPathType;
	cursor?: "pointer" | "default" | "inherit";
	style?: CSSProperties;
	alt?: string;
}

const IconEmbedSvg: React.FC<IconEmbedSvgType> = ({
	width = 24,
	height,
	color1 = "mlt-purple-secondary",
	color2 = "mlt-purple-secondary",
	opacity1 = "44",
	opacity2 = "FF",
	type = "check-square",
	cursor = "pointer",
	style,
}) => {
	const viewBoxWidth = 512;
	const viewBoxHeight = 512;

	const displayWidth =
		!width && height ? (viewBoxWidth / viewBoxHeight) * height : width ?? viewBoxWidth;
	const displayHeight =
		!height && width ? (viewBoxHeight / viewBoxWidth) * width : height ?? viewBoxHeight;

	const applyColor1 = `${allColors[color1]}${opacity1}`;
	const applyColor2 = `${allColors[color2]}${opacity2}`;

	return (
		<svg
			fill="none"
			height={displayHeight}
			style={{ cursor, ...style }}
			viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
			width={displayWidth}
			xmlns="http://www.w3.org/2000/svg"
		>
			{/* <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
			<SvgPathLib c1={applyColor1} c2={applyColor2} type={type} />
		</svg>
	);
};

export default IconEmbedSvg;

/**
 * The dual color SVG path library starts here.
 */
interface SvgPathLibProps {
	type: IconEmbSvgPathType;
	c1: string;
	c2: string;
}

const SvgPathLib: React.FC<SvgPathLibProps> = ({ type, c1, c2 }) => {
	switch (type) {
		case "check-circle":
			return (
				<>
					<path
						d="M369 175c9.4 9.4 9.4 24.6 0 33.9L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0z"
						fill={c2}
					/>
					<path
						d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
						fill={c1}
					/>
				</>
			);
		case "radio":
			return (
				<>
					<path d="M256 160a96 96 0 1 0 0 192 96 96 0 1 0 0-192z" fill={c2} />
					<path
						d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"
						fill={c1}
					/>
				</>
			);
		case "check-square":
			return (
				<>
					<path
						d="M337 175c9.4 9.4 9.4 24.6 0 33.9L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0z"
						fill={c2}
					/>
					<path
						d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
						fill={c1}
					/>
				</>
			);
		case "cloud-arrow-up":
			return (
				<>
					<path
						d="M223 297c-9.4-9.4-9.4-24.6 0-33.9l80-80c9.4-9.4 24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-39-39L344 392c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-134.1-39 39c-9.4 9.4-24.6 9.4-33.9 0z"
						fill={c2}
					/>
					<path
						d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"
						fill={c1}
					/>
				</>
			);
		case "cloud-check":
			return (
				<>
					<path
						d="M433 207c9.4 9.4 9.4 24.6 0 33.9L305 369c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L399 207c9.4-9.4 24.6-9.4 33.9 0z"
						fill={c2}
					/>
					<path
						d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zM433 241c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L433 241z"
						fill={c1}
					/>
				</>
			);
		case "cloud-binary":
			return (
				<>
					<path
						d="M200 160c-22.1 0-40 17.9-40 40v32c0 22.1 17.9 40 40 40h16c22.1 0 40-17.9 40-40V200c0-22.1-17.9-40-40-40H200zm-8 40c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v32c0 4.4-3.6 8-8 8H200c-4.4 0-8-3.6-8-8V200zm112-40c-8.8 0-16 7.2-16 16s7.2 16 16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V176c0-8.8-7.2-16-16-16H304zm80 40v32c0 22.1 17.9 40 40 40h16c22.1 0 40-17.9 40-40V200c0-22.1-17.9-40-40-40H424c-22.1 0-40 17.9-40 40zm40-8h16c4.4 0 8 3.6 8 8v32c0 4.4-3.6 8-8 8H424c-4.4 0-8-3.6-8-8V200c0-4.4 3.6-8 8-8zM192 304c-8.8 0-16 7.2-16 16s7.2 16 16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V320c0-8.8-7.2-16-16-16H192zm120 0c-22.1 0-40 17.9-40 40v32c0 22.1 17.9 40 40 40h16c22.1 0 40-17.9 40-40V344c0-22.1-17.9-40-40-40H312zm-8 40c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v32c0 4.4-3.6 8-8 8H312c-4.4 0-8-3.6-8-8V344zm96-24c0 8.8 7.2 16 16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V320c0-8.8-7.2-16-16-16H416c-8.8 0-16 7.2-16 16z"
						fill={c2}
					/>
					<path
						d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm16-280v32c0 22.1 17.9 40 40 40h16c22.1 0 40-17.9 40-40V200c0-22.1-17.9-40-40-40H200c-22.1 0-40 17.9-40 40zm40-8h16c4.4 0 8 3.6 8 8v32c0 4.4-3.6 8-8 8H200c-4.4 0-8-3.6-8-8V200c0-4.4 3.6-8 8-8zm88-16c0 8.8 7.2 16 16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V176c0-8.8-7.2-16-16-16H304c-8.8 0-16 7.2-16 16zm136-16c-22.1 0-40 17.9-40 40v32c0 22.1 17.9 40 40 40h16c22.1 0 40-17.9 40-40V200c0-22.1-17.9-40-40-40H424zm-8 40c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v32c0 4.4-3.6 8-8 8H424c-4.4 0-8-3.6-8-8V200zM176 320c0 8.8 7.2 16 16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V320c0-8.8-7.2-16-16-16H192c-8.8 0-16 7.2-16 16zm96 24v32c0 22.1 17.9 40 40 40h16c22.1 0 40-17.9 40-40V344c0-22.1-17.9-40-40-40H312c-22.1 0-40 17.9-40 40zm40-8h16c4.4 0 8 3.6 8 8v32c0 4.4-3.6 8-8 8H312c-4.4 0-8-3.6-8-8V344c0-4.4 3.6-8 8-8zm104-32c-8.8 0-16 7.2-16 16s7.2 16 16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V320c0-8.8-7.2-16-16-16H416z"
						fill={c1}
					/>
				</>
			);
		case "cloud":
			return (
				<>
					<path
						d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"
						fill={c1}
					/>
				</>
			);
		case "tick":
			return (
				<>
					<path
						d="M337 175c9.4 9.4 9.4 24.6 0 33.9L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0z"
						fill={c2}
					/>
				</>
			);
		case "square":
			return (
				<>
					<path
						d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z"
						fill={c1}
					/>
				</>
			);
		case "circle":
			return (
				<>
					<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" fill={c1} />
				</>
			);
		case "clipboard":
			return (
				<>
					<path
						d="M192 0c-39.5 0-72.4 28.7-78.8 66.3C93.9 72.6 80 90.7 80 112v24c0 13.3 10.7 24 24 24h88 88c13.3 0 24-10.7 24-24V112c0-21.3-13.9-39.4-33.2-45.7C264.4 28.7 231.5 0 192 0zm0 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
						fill={c2}
					/>
					<path
						d="M113.6 64c-.2 .8-.3 1.6-.4 2.3C93.9 72.6 80 90.7 80 112v24c0 13.3 10.7 24 24 24h88 88c13.3 0 24-10.7 24-24V112c0-21.3-13.9-39.4-33.2-45.7c-.1-.8-.3-1.6-.4-2.3H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128C0 92.7 28.7 64 64 64h49.6z"
						fill={c1}
					/>
				</>
			);
		case "clipboard-check":
			return (
				<>
					<path
						d="M113.2 66.3C93.9 72.6 80 90.7 80 112v24c0 13.3 10.7 24 24 24h88 88c13.3 0 24-10.7 24-24V112c0-21.3-13.9-39.4-33.2-45.7C264.4 28.7 231.5 0 192 0s-72.4 28.7-78.8 66.3zM168 80a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM305 273c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L305 273z"
						fill={c2}
					/>
					<path
						d="M113.2 66.3c.1-.8 .3-1.6 .4-2.3H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H270.4c.2 .8 .3 1.6 .4 2.3C290.1 72.6 304 90.7 304 112v24c0 13.3-10.7 24-24 24H192 104c-13.3 0-24-10.7-24-24V112c0-21.3 13.9-39.4 33.2-45.7zM305 273L177 401c-9.4 9.4-24.6 9.4-33.9 0L79 337c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L271 239c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
						fill={c1}
					/>
				</>
			);
		case "up-right-from-square":
			return (
				<>
					<path
						d="M322.4 19.8C327.4 7.8 339.1 0 352 0H480c17.7 0 32 14.3 32 32V160c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9L416 141.3 246.6 310.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L370.7 96 329.4 54.6c-9.2-9.2-11.9-22.9-6.9-34.9z"
						fill={c2}
					/>
					<path
						d="M0 112C0 67.8 35.8 32 80 32H192c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16H400c8.8 0 16-7.2 16-16V320c0-17.7 14.3-32 32-32s32 14.3 32 32V432c0 44.2-35.8 80-80 80H80c-44.2 0-80-35.8-80-80V112z"
						fill={c1}
					/>
				</>
			);
		case "link":
			return (
				<>
					<path
						d="M60.2 448.8c-56.5-56.5-56.5-148 0-204.5L172.5 132c56.5-56.5 148-56.5 204.5 0c50 50 56.5 128.8 15.4 186.3l-1.1 1.6c-10.3 14.4-30.3 17.7-44.6 7.4s-17.7-30.3-7.4-44.6l1.1-1.6c22.9-32.1 19.3-76-8.6-103.9c-31.5-31.5-82.5-31.5-114 0L105.5 289.5C74 321 74 372 105.5 403.5c27.9 27.9 71.8 31.5 103.8 8.6l1.6-1.1c14.4-10.3 34.4-6.9 44.6 7.4s6.9 34.4-7.4 44.6l-1.6 1.1C189 505.3 110.2 498.7 60.2 448.8z"
						fill={c2}
					/>
					<path
						d="M579.8 63.2c56.5 56.5 56.5 148 0 204.5L467.5 380c-56.5 56.5-148 56.5-204.5 0c-50-50-56.5-128.8-15.4-186.3l1.1-1.6c10.3-14.4 30.3-17.7 44.6-7.4s17.7 30.3 7.4 44.6l-1.1 1.6c-22.9 32.1-19.3 76 8.6 103.8c31.5 31.5 82.5 31.5 114 0L534.5 222.5c31.5-31.5 31.5-82.5 0-114C506.7 80.6 462.7 77 430.7 99.9l-1.6 1.1c-14.4 10.3-34.4 6.9-44.6-7.4s-6.9-34.4 7.4-44.6l1.6-1.1C451 6.7 529.8 13.3 579.8 63.2z"
						fill={c1}
					/>
				</>
			);
		case "message-lines":
			return (
				<>
					<path
						d="M128 168c0-13.3 10.7-24 24-24H360c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24H264c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24z"
						fill={c2}
					/>
					<path
						d="M0 64C0 28.7 28.7 0 64 0H448c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H309.3L185.6 508.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V416H64c-35.3 0-64-28.7-64-64V64zm152 80c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H152zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H152z"
						fill={c1}
					/>
				</>
			);
		case "brush":
			return (
				<>
					<path
						d="M0 288H384v32c0 35.3-28.7 64-64 64H256v64c0 35.3-28.7 64-64 64s-64-28.7-64-64V384H64c-35.3 0-64-28.7-64-64V288zM192 464a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"
						fill={c2}
					/>
					<path
						d="M162.4 6c-1.5-3.6-5-6-8.9-6h-19c-3.9 0-7.5 2.4-8.9 6L104.9 57.7c-3.2 8-14.6 8-17.8 0L66.4 6c-1.5-3.6-5-6-8.9-6H48C21.5 0 0 21.5 0 48V256v22.4V288H9.6 374.4 384v-9.6V256 48c0-26.5-21.5-48-48-48H230.5c-3.9 0-7.5 2.4-8.9 6L200.9 57.7c-3.2 8-14.6 8-17.8 0L162.4 6z"
						fill={c1}
					/>
				</>
			);

		case "trash":
			return (
				<>
					<path
						d="M163.8 0c-12.1 0-23.2 6.8-28.6 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8z"
						fill={c2}
					/>
					<path
						d="M394.6 466.8L416 96H32L53.4 466.8c1.5 25.4 22.5 45.2 47.9 45.2H346.7c25.4 0 46.5-19.8 47.9-45.2z"
						fill={c1}
					/>
				</>
			);
		case "trash-check":
			return (
				<>
					<path
						d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM337 241c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L337 241z"
						fill={c1}
					/>
					<path
						d="M416 96H32L53.4 466.8c1.5 25.4 22.5 45.2 47.9 45.2H346.7c25.4 0 46.5-19.8 47.9-45.2L416 96zM337 241L209 369c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 207c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
						fill={c2}
					/>
				</>
			);
		case "broom":
			return (
				<>
					<path
						d="M409.4 281.4L294.6 166.6c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6v29.1L364.3 320h29.1c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16zm-68.3 72L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l29.9-15c8.3-4.2 15.9 6.9 8.9 13.1L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z"
						fill={c2}
					/>
					<path
						d="M566.6 9.4c12.5 12.5 12.5 32.8 0 45.3l-192 192-45.3-45.3 192-192c12.5-12.5 32.8-12.5 45.3 0z"
						fill={c1}
					/>
				</>
			);
		case "broom-wide":
			return (
				<>
					<path
						d="M313.6 121.6c-15.2-15.2-38.5-18.4-57.3-8l-32.5 18L380.4 288.1l18-32.5c10.4-18.7 7.1-42.1-8-57.3l-76.8-76.8zM187.5 151.8L16.4 246.9C6.3 252.5 0 263.2 0 274.8c0 8.5 3.4 16.6 9.3 22.6l43.2 43.2c2.1 2.1 5.3 2.9 8.2 1.9l52.1-17.4c6.3-2.1 12.2 3.9 10.1 10.1l-17.4 52.1c-1 2.9-.2 6 1.9 8.2L214.7 502.7c6 6 14.1 9.3 22.6 9.3c11.6 0 22.3-6.3 27.9-16.4l95.1-171.1L187.5 151.8z"
						fill={c2}
					/>
					<path
						d="M502.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128 45.3 45.3 128-128z"
						fill={c1}
					/>
				</>
			);
		case "broom-ball":
			return (
				<>
					<path
						d="M409.4 281.4L294.6 166.6c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6v29.1L364.3 320h29.1c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16zm-68.3 72L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z"
						fill={c2}
					/>
					<path
						d="M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192 45.3 45.3 192-192zM464 512a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"
						fill={c1}
					/>
				</>
			);
		case "tags":
			return (
				<>
					<path
						d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l168 168c25 25 65.5 25 90.5 0L410.7 309.3c25-25 25-65.5 0-90.5l-168-168c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
						fill={c2}
					/>
					<path
						d="M311.1 38.9c9.4-9.3 24.6-9.2 33.9 .2L472.8 168.4c52.4 53 52.4 138.2 0 191.2L360.8 472.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L438.6 325.9c33.9-34.3 33.9-89.4 0-123.7L310.9 72.9c-9.3-9.4-9.2-24.6 .2-33.9z"
						fill={c1}
					/>
				</>
			);
		case "tag":
			return (
				<>
					<path
						d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
						fill={c1}
					/>
				</>
			);
		case "github":
			return (
				<>
					<path
						d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
						fill={c2 ?? c1}
					/>
				</>
			);
	}
};
