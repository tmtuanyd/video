var customMuteIconHTML =
	"<style>.hidden {display: none;}</style>" +
	'<svg viewBox="0 0 18 14" slot="icon" class="mute-icon" aria-hidden="true" data-custom-mute-icon>' +
	'<g class="unmuted hidden" data-custom-mute-icon>' +
	'<path d="M6.76786 1.21233L3.98606 3.98924H1.19937C0.593146 3.98924 0.101743 4.51375 0.101743 5.1607V6.96412L0 6.99998L0.101743 7.03583V8.83926C0.101743 9.48633 0.593146 10.0108 1.19937 10.0108H3.98606L6.76773 12.7877C7.23561 13.2547 8 12.9007 8 12.2171V1.78301C8 1.09925 7.23574 0.745258 6.76786 1.21233Z"></path>' +
	'<path class="volume-low" d="M10 3.54781C10.7452 4.55141 11.1393 5.74511 11.1393 6.99991C11.1393 8.25471 10.7453 9.44791 10 10.4515L10.7988 11.0496C11.6734 9.87201 12.1356 8.47161 12.1356 6.99991C12.1356 5.52821 11.6735 4.12731 10.7988 2.94971L10 3.54781Z"></path>' +
	'<path class="volume-medium" d="M12.3778 2.40086C13.2709 3.76756 13.7428 5.35806 13.7428 7.00026C13.7428 8.64246 13.2709 10.233 12.3778 11.5992L13.2106 12.1484C14.2107 10.6185 14.739 8.83796 14.739 7.00016C14.739 5.16236 14.2107 3.38236 13.2106 1.85156L12.3778 2.40086Z"></path>' +
	'<path class="volume-high" d="M15.5981 0.75L14.7478 1.2719C15.7937 2.9919 16.3468 4.9723 16.3468 7C16.3468 9.0277 15.7937 11.0082 14.7478 12.7281L15.5981 13.25C16.7398 11.3722 17.343 9.211 17.343 7C17.343 4.789 16.7398 2.6268 15.5981 0.75Z"></path>' +
	"</g>" +
	'<g class="muted hidden" data-custom-mute-icon>' +
	'<path fill-rule="evenodd" clip-rule="evenodd" d="M4.39976 4.98924H1.19937C1.19429 4.98924 1.17777 4.98961 1.15296 5.01609C1.1271 5.04369 1.10174 5.09245 1.10174 5.1607V8.83926C1.10174 8.90761 1.12714 8.95641 1.15299 8.984C1.17779 9.01047 1.1943 9.01084 1.19937 9.01084H4.39977L7 11.6066V2.39357L4.39976 4.98924ZM7.47434 1.92006C7.4743 1.9201 7.47439 1.92002 7.47434 1.92006V1.92006ZM6.76773 12.7877L3.98606 10.0108H1.19937C0.593146 10.0108 0.101743 9.48633 0.101743 8.83926V7.03583L0 6.99998L0.101743 6.96412V5.1607C0.101743 4.51375 0.593146 3.98924 1.19937 3.98924H3.98606L6.76786 1.21233C7.23574 0.745258 8 1.09925 8 1.78301V12.2171C8 12.9007 7.23561 13.2547 6.76773 12.7877Z"></path>' +
	'<path fill-rule="evenodd" clip-rule="evenodd" d="M15.2677 9.30323C15.463 9.49849 15.7796 9.49849 15.9749 9.30323C16.1701 9.10796 16.1701 8.79138 15.9749 8.59612L14.2071 6.82841L15.9749 5.06066C16.1702 4.8654 16.1702 4.54882 15.9749 4.35355C15.7796 4.15829 15.4631 4.15829 15.2678 4.35355L13.5 6.1213L11.7322 4.35348C11.537 4.15822 11.2204 4.15822 11.0251 4.35348C10.8298 4.54874 10.8298 4.86532 11.0251 5.06058L12.7929 6.82841L11.0251 8.59619C10.8299 8.79146 10.8299 9.10804 11.0251 9.3033C11.2204 9.49856 11.537 9.49856 11.7323 9.3033L13.5 7.53552L15.2677 9.30323Z"></path>' +
	"</g>" +
	"</svg>";

var facebookIconHtml =
	'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" id="facebook"><path fill="#1877f2" d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"></path><path fill="#fff" d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"></path></svg>';

var twitterIconHtml =
	'<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 72 72" viewBox="0 0 72 72" id="twitter-x"><switch><g><path d="M42.5,31.2L66,6h-6L39.8,27.6L24,6H4l24.6,33.6L4,66h6l21.3-22.8L48,66h20L42.5,31.2z M12.9,10h8l38.1,52h-8L12.9,10z"></path></g></switch></svg>';

var linkedinIconHtml =
	'<svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" id="linkedin"><g fill="none" fill-rule="evenodd"><g><rect width="72" height="72" fill="#0077B5" rx="4"></rect><path fill="#FFF" d="M13.139 27.848h9.623V58.81h-9.623V27.848zm4.813-15.391c3.077 0 5.577 2.5 5.577 5.577 0 3.08-2.5 5.581-5.577 5.581a5.58 5.58 0 1 1 0-11.158zm10.846 15.39h9.23v4.231h.128c1.285-2.434 4.424-5 9.105-5 9.744 0 11.544 6.413 11.544 14.75V58.81h-9.617V43.753c0-3.59-.066-8.209-5-8.209-5.007 0-5.776 3.911-5.776 7.95V58.81h-9.615V27.848z"></path></g></g></svg>';

var whatsappIconHtml =
	'<svg fill="#25D366" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 308 308" xml:space="preserve"><g id="XMLID_468_"><path id="XMLID_469_" d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458C233.168,179.508,230.845,178.393,227.904,176.981z"/><path id="XMLID_470_" d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0zM156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867C276.546,215.678,222.799,268.994,156.734,268.994z"/></g></svg>';

var pauseIcon =
	'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="4" width="4" height="16" fill="currentColor"/><rect x="14" y="4" width="4" height="16" fill="currentColor"/></svg>';

const playIcon = `
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
						</svg>`;

const closeIcon = `
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
								<path d="M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>`;

const fullViewIcon = ` <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M4 4H10V2H2V10H4V4Z" fill="currentColor"/>
								<path d="M20 4H14V2H22V10H20V4Z" fill="currentColor"/>
								<path d="M4 20H10V22H2V14H4V20Z" fill="currentColor"/>
								<path d="M20 20H14V22H22V14H20V20Z" fill="currentColor"/>
						</svg>`;

class VideoPlayerProcessor {
	constructor(
		params,
		previewMode = "",
		customizedParams = null,
		styleIdentifier = ""
	) {
		let customizedParamsJSON = JSON.parse(customizedParams);
		this.isClosed = false;
		this.currentTime = 0;

		this.videoData = {};
		this.videoData.styleIdentifier = styleIdentifier;
		this.videoData.materialId = params.materialId;
		this.videoData.impressionURL = params.impressionURL;
		this.videoData.eventURLs = params.eventURLs;
		this.videoData.link = params.link;
		this.videoData.linkReference = params.ctaReference;
		this.videoData.linkText = customizedParamsJSON.ctaText
			? customizedParamsJSON.ctaText
			: params.ctaText;
		this.videoData.sectionDurationSeconds = params.sectionDurationSeconds;
		this.videoData.videoDurationSeconds = params.videoDurationSeconds;
		this.videoData.fileLocation = params.fileLocation;
		this.videoData.cssLocation = params.cssLocation;
		this.videoData.deliveryMode = params.deliveryMode;
		this.videoData.campaignLogo = params.campaignLogo;

		this.videoData.playerWidth = customizedParamsJSON.playerWidth;
		this.videoData.playerHeight = customizedParamsJSON.playerHeight;
		this.videoData.useAutoDimensions = customizedParamsJSON.useAutoDimensions;
		this.videoData.playerSound = customizedParamsJSON.playerSound;
		this.videoData.ctaLayout = customizedParamsJSON.ctaLayout;
		this.videoData.ctaSupportingText = customizedParamsJSON.ctaSupportingText;
		this.videoData.affiliateSiteID = customizedParamsJSON.affiliateSiteID;
		this.videoData.ctaButtonText = customizedParamsJSON.ctaButtonText;
		this.videoData.ctaReferenceUrl = customizedParamsJSON.ctaReferenceUrl;
		this.videoData.ctaTextColorHex = customizedParamsJSON.ctaTextColorHex;
		this.videoData.ctaBgColorHex = customizedParamsJSON.ctaBgColorHex;
		this.videoData.ctaBgOpacity = customizedParamsJSON.ctaBgOpacity;
		this.videoData.ctaButtonColor = customizedParamsJSON.ctaButtonColor;
		this.videoData.ctaButtonTextColor = customizedParamsJSON.ctaButtonTextColor;
		this.videoData.ctaShowOnHover = customizedParamsJSON.ctaShowOnHover;
		this.videoData.ctaTaglineText = customizedParamsJSON.ctaTaglineText;
		this.videoData.taglineShow = customizedParamsJSON.taglineShow;
		this.videoData.richText =
			this.unpackTextArea(customizedParamsJSON.richText) || "undefined";
		this.videoData.richTextColor = customizedParamsJSON.richTextColor;
		this.videoData.richBgOpacity = customizedParamsJSON.richBgOpacity;
		this.videoData.richShow = customizedParamsJSON.richShow;
		this.videoData.socialShow = customizedParamsJSON.socialShow;

		this.state = {};
		this.state.previewMode = !!previewMode;
		this.state.playerReady = false;
		this.state.isViewed = false;
		this.state.wasLaunched = false;
		this.state.complete = false;
		this.minimizedPlayerWrapper = null;

		this.config = {
			showMinimizedPlayer:
				customizedParamsJSON.minimizedPlayer === "t" && !this.state.previewMode,
		};
		this.isMinimized = false;

		let isVisible = this.elementIsVisibleInViewport(
			this.getVideoWrapperElement(this.videoData.styleIdentifier),
			false
		);
		if (isVisible) {
			this.init().then(() => {
				setTimeout(() => {
					let isPlayerVisible = this.elementIsVisibleInViewport(
						this.getCurrentVideoPlayerElement(),
						false
					);
					if (isPlayerVisible) {
						this.startEvents();
					} else {
						window.addEventListener("scroll", this.delayedEventInit);
						if (this.getCurrentVideoPlayerElement()) {
							this.getCurrentVideoPlayerElement().pause();
							this.hideSkeleton();
						}
					}
				}, 150);
			});
		} else {
			window.addEventListener("scroll", this.delayedInit);
		}
	}

	unpackTextArea(value) {
		return this.unescapeSpecialChars(value);
	}

	unescapeSpecialChars(str) {
		return str
			.replace(/\\\\/g, "\\") // Unescape backslash
			.replace(/\\"/g, '"') // Unescape double quote
			.replace(/\\n/g, "\n") // Unescape new line
			.replace(/\\r/g, "\r") // Unescape carriage return
			.replace(/\\t/g, "\t") // Unescape tab
			.replace(/\\f/g, "\f"); // Unescape form feed
	}

	delayedInit = () => {
		let isVisible = this.elementIsVisibleInViewport(
			this.getVideoWrapperElement(this.videoData.styleIdentifier),
			false
		);
		if (isVisible || this.state.previewMode) {
			window.removeEventListener("scroll", this.delayedInit);
			this.hideSkeleton();

			this.init().then(() => {
				setTimeout(() => {
					window.addEventListener("scroll", this.delayedEventInit);
				}, 150);
			});
		}
	};

	hideSkeleton = () => {
		if (
			this.getVideoWrapperElement(this.videoData.styleIdentifier) != null &&
			this.getVideoWrapperElement(this.videoData.styleIdentifier).querySelector(
				".skeleton-loader"
			) != null
		) {
			this.getVideoWrapperElement(this.videoData.styleIdentifier).querySelector(
				".skeleton-loader"
			).style.display = "none";
		}
	};

	startEvents = () => {
		this.hideSkeleton();

		this.eventTrigger("impression");
		this.eventTrigger("start");

		this.videoData.player.addEventListener("timeupdate", () => {
			this.processPosition(this.videoData.player.currentTime);
		});
	};

	delayedEventInit = () => {
		let isVisible = this.elementIsVisibleInViewport(
			this.getVideoWrapperElement(this.videoData.styleIdentifier),
			false
		);
		if (isVisible) {
			window.removeEventListener("scroll", this.delayedEventInit);

			this.startEvents();
		} else {
			if (this.getCurrentVideoPlayerElement()) {
				this.getCurrentVideoPlayerElement().pause();
				this.hideSkeleton();
			}
		}
	};

	togglePlayOnViewPortVisibility = () => {
		let isVisible = this.elementIsVisibleInViewport(
			this.getCurrentVideoPlayerElement(),
			false
		);

		if (this.videoData.player === undefined) {
			return;
		}

		if (!isVisible) {
			this.videoData.player.pause();
		} else {
			this.videoData.player.play();
		}
	};

	addKeyframes(ctaSlide, duration, startPosition) {
		if (ctaSlide) {
			const existingStyle = document.getElementById("dynamic-keyframes");
			if (existingStyle) {
				existingStyle.remove();
			}

			const style = document.createElement("style");
			style.id = "dynamic-keyframes";
			document.head.appendChild(style);

			const sheet = style.sheet;

			sheet.insertRule(
				`
			@keyframes moveText {
				0% {
					transform: translateX(${startPosition}px);
				}
				100% {
					transform: translateX(-100%);
				}
			}
		`,
				sheet.cssRules.length
			);

			ctaSlide.style.animation = `moveText ${duration}s linear infinite`;
		}
	}

	addResponsive(wrapper) {
		let overlay = wrapper.querySelector(".overlay");
		let ctaHover = overlay.querySelector(".cta-area-hover");
		let ctaContent = ctaHover.querySelector(".cta-content");
		let ctaHoverButton = ctaHover.querySelector(".cta-button");
		let ctaHoverButtonLink = ctaHover.querySelector("input");
		let ctaValue = ctaContent.querySelector("strong");
		let ctaTextSupport = ctaContent.querySelector("p");
		let ctaSlide = wrapper.querySelector(".cta-slide");
		let buttonWrapper = wrapper.querySelector(".buttonWrapper");
		let ctaButton = buttonWrapper.querySelector(".cta-button");
		let ctaButtonLink = ctaButton.querySelector(".cta-btn");

		if (ctaHover && ctaValue) {
			let ctaHoverHeight = ctaHover.offsetHeight;
			let overlayWidth = overlay.offsetWidth;
			let fontSize = overlayWidth > 800 ? 32 : 16;
			let numberOfRow = Math.floor((ctaHoverHeight / 2 - 42) / fontSize);
			ctaValue.style.webkitLineClamp = numberOfRow;

			if (overlayWidth > 800) {
				ctaValue.style.fontSize = "2em";
				if (ctaTextSupport) {
					ctaTextSupport.style.fontSize = "1.3em";
				}
				if (ctaHoverButtonLink) {
					ctaHoverButtonLink.style.padding = "0em 1.125em";
					ctaHoverButtonLink.style.height = "54px";
					ctaHoverButtonLink.style.fontSize = "1.25em";
					ctaHoverButton.style.marginTop = "0.87em";
				}
				if (buttonWrapper) {
					buttonWrapper.style.flexDirection = "row";
					if (ctaButtonLink) {
						ctaButton.style.width = "calc(100% - 250px)";
						ctaButtonLink.style.fontSize = "1em";
					}
				}
			} else {
				ctaValue.style.fontSize = "1em";
				if (ctaTextSupport) {
					ctaTextSupport.style.fontSize = "0.67em";
				}
				if (ctaHoverButtonLink) {
					ctaHoverButtonLink.style.padding = "0em 0.555em";
					ctaHoverButtonLink.style.height = "28px";
					ctaHoverButtonLink.style.fontSize = "0.625em";
					ctaHoverButton.style.marginTop = "0.4375em";
				}
				if (buttonWrapper) {
					buttonWrapper.style.flexDirection = "column";
					if (ctaButtonLink) {
						ctaButton.style.width = "100%";
						ctaButtonLink.style.fontSize = "0.75em";
					}
				}
			}
		}
		if (ctaSlide) {
			let overlayWidth = overlay.offsetWidth;
			let ctaSlideWidth = ctaSlide.offsetWidth;
			let totalDistance = overlayWidth + ctaSlideWidth;
			let duration = totalDistance / 100;
			this.addKeyframes(ctaSlide, duration, overlayWidth);
		}
	}

	async init() {
		await this.initializePlayer(
			this.videoData.materialId,
			this.videoData.styleIdentifier
		);
		await this.initializeEventData();

		if (this.config.showMinimizedPlayer) {
			this.addScrollListener();
		}
	}

	addScrollListener() {
		window.addEventListener("scroll", this.handleScroll.bind(this));
	}

	removeScrollListener() {
		window.removeEventListener("scroll", this.handleScroll.bind(this));
		window.removeEventListener("scroll", this.togglePlayOnViewPortVisibility);
	}

	initMiniPlayer() {
		const videoElement = document.getElementById(
			`current-player-${this.videoData.styleIdentifier}`
		);
		const minimizedPlayerId = `minimized-player-wrapper-${this.videoData.styleIdentifier}`;

		const parentDiv = document.createElement("div");
		parentDiv.id = minimizedPlayerId;
		parentDiv.classList.add("minimized-player-parent");

		const wrapperDiv = document.createElement("div");
		wrapperDiv.classList.add("minimized-player-wrapper");

		parentDiv.appendChild(wrapperDiv);

		const minimizedPlayer = videoElement.cloneNode(true);
		minimizedPlayer.id = `minimized-current-player-${this.videoData.styleIdentifier}`;
		minimizedPlayer.currentTime = this.currentTime;
		minimizedPlayer.addEventListener("timeupdate", () => {
			this.processPosition(minimizedPlayer.currentTime);
		});
		wrapperDiv.appendChild(minimizedPlayer);

		const mediaTheme = minimizedPlayer.shadowRoot.querySelector("media-theme");
		if (mediaTheme) {
			const muxVideo = mediaTheme.querySelector("mux-video");
			if (muxVideo) {
				const video = muxVideo.shadowRoot.querySelector("video");
				if (video) {
					video.addEventListener(
						"loadedmetadata",
						function () {
							const w = video.videoWidth;
							const h = video.videoHeight;
							const ratio = +(w / h).toFixed(2);
							if (ratio === 1) {
								video.style.width = "220px";
								parentDiv.classList.add("square");
							} else if (ratio < 1) {
								video.style.width = "220px";
								video.style.maxHeight = "320px";
								parentDiv.classList.add("portrait");
							} else if (ratio > 1) {
								video.style.width = "320px";
								parentDiv.classList.add("landscape");
							}
							video.style.objectFit = "cover";

							const ctaWrapper = document.createElement("div");
							ctaWrapper.classList.add("cta-minimized-container");
							wrapperDiv.appendChild(ctaWrapper);

							let maxChars = 55;
							if (parentDiv.classList.contains("landscape")) {
								maxChars = 75;
							}

							const textElement = document.createElement("div");
							textElement.classList.add("trade-tracker-text");
							let text = this.videoData.linkText;
							if (text.length > maxChars) {
								textElement.innerHTML =
									text.slice(0, maxChars) +
									' <span class="read-more" style="color:#4E91CE; text-decoration:underline; cursor:pointer; font-size:14px;">Read more</span>';

								textElement.querySelector(".read-more").onclick = () => {
									textElement.innerText = text;
								};
							} else {
								textElement.innerText = text;
							}
							ctaWrapper.appendChild(textElement);

							let ctaButtonText = this.videoData.ctaButtonText;
							let ctaButtonLink = this.videoData.link;
							let ctaButtonBgColor = this.videoData.ctaButtonColor;
							let ctaButtonTextColor = this.videoData.ctaButtonTextColor;
							const ctaButton = document.createElement("a");
							ctaButton.href = ctaButtonLink;
							ctaButton.target = "_blank";
							ctaButton.classList.add("cta-button-minimized");
							ctaButton.innerText = ctaButtonText;
							ctaButton.style.backgroundColor = ctaButtonBgColor;
							ctaButton.style.color = ctaButtonTextColor;
							ctaWrapper.appendChild(ctaButton);

							const buttonContainer = document.createElement("div");
							buttonContainer.classList.add("button-container");
							wrapperDiv.appendChild(buttonContainer);

							const closeButton = document.createElement("button");
							closeButton.classList.add("close-button");
							closeButton.innerHTML = closeIcon;
							closeButton.addEventListener("click", () => {
								this.closeMinimizedPlayer(minimizedPlayer, videoElement);
							});
							buttonContainer.appendChild(closeButton);

							const pauseButton = document.createElement("button");
							pauseButton.classList.add("pause-button");
							pauseButton.innerHTML = pauseIcon;
							pauseButton.addEventListener("click", () => {
								minimizedPlayer.pause();
								pauseButton.style.display = "none";
								playButton.style.display = "block";
							});
							buttonContainer.appendChild(pauseButton);

							const playButton = document.createElement("button");
							playButton.classList.add("play-button");
							playButton.innerHTML = playIcon;
							playButton.style.display = "none";
							playButton.addEventListener("click", () => {
								minimizedPlayer.play();
								playButton.style.display = "none";
								pauseButton.style.display = "block";
							});
							buttonContainer.appendChild(playButton);

							const fullscreenButton = document.createElement("button");
							fullscreenButton.classList.add("fullscreen-button");
							fullscreenButton.innerHTML = fullViewIcon;
							fullscreenButton.addEventListener("click", () => {
								if (minimizedPlayer.requestFullscreen) {
									minimizedPlayer.requestFullscreen();
								} else if (minimizedPlayer.mozRequestFullScreen) {
									minimizedPlayer.mozRequestFullScreen();
								} else if (minimizedPlayer.webkitRequestFullscreen) {
									minimizedPlayer.webkitRequestFullscreen();
								} else if (minimizedPlayer.msRequestFullscreen) {
									minimizedPlayer.msRequestFullscreen();
								}
							});
							buttonContainer.appendChild(fullscreenButton);

							document.body.appendChild(parentDiv);
							this.minimizedPlayerWrapper = wrapperDiv;
							this.minimizedPlayerWrapper.style.display = "none";
						}.bind(this)
					);
				}
			}
		}
	}

	handleScroll() {
		const videoElement = document.getElementById(
			`current-player-${this.videoData.styleIdentifier}`
		);
		const minimizedPlayerId = `minimized-player-wrapper-${this.videoData.styleIdentifier}`;
		const minimizedPlayer = document
			.getElementById(minimizedPlayerId)
			?.querySelector(".minimized-player-wrapper");
		if (!videoElement || this.isClosed) return;

		let displayState = "";

		if (minimizedPlayer) {
			displayState = minimizedPlayer.style.display;
		}

		const rect = videoElement.getBoundingClientRect();
		const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;
		const isOutOfView = rect.bottom < 0;

		if (isInView) {
			document
				.querySelectorAll(".minimized-player-wrapper")
				.forEach((wrapper) => {
					wrapper.style.display = "none";
				});
			return;
		}

		if (isOutOfView && (!this.isMinimized || displayState === "none")) {
			let anyVideoInView = false;
			document.querySelectorAll("[id^='current-player-']").forEach((video) => {
				if (video.id !== `current-player-${this.videoData.styleIdentifier}`) {
					const r = video.getBoundingClientRect();
					const inView = r.top <= window.innerHeight && r.bottom >= 0;
					if (inView) {
						anyVideoInView = true;
					}
				}
			});
			if (anyVideoInView) return;
			this.currentTime = videoElement.currentTime;
			this.showMinimizedPlayer(videoElement);
		} else if (!isOutOfView && this.isMinimized) {
			this.restorePlayer(videoElement);
		}
	}

	showMinimizedPlayer() {
		const minimizedParents = document.querySelectorAll(
			".minimized-player-parent"
		);
		minimizedParents.forEach((parent) => {
			const minimizedWrapper = parent.querySelector(
				".minimized-player-wrapper"
			);
			if (minimizedWrapper && minimizedWrapper.style.display !== "none") {
				minimizedWrapper.style.display = "none";
			}
		});

		if (!this.state.playerReady || !this.videoData.player) {
			return;
		}

		const videoElement = this.videoData.player;

		this.isMinimized = true;
		if (this.minimizedPlayerWrapper) {
			this.minimizedPlayerWrapper.style.display = "flex";
			const minimizedPlayer =
				this.minimizedPlayerWrapper.querySelector("video-player");
			if (minimizedPlayer) {
				minimizedPlayer.currentTime = this.currentTime;
				minimizedPlayer.play();
				minimizedPlayer.addEventListener("timeupdate", () => {
					this.processPosition(minimizedPlayer.currentTime);
				});
			}
			return;
		}
		// Use unique ID for minimized player wrapper
	}

	closeMinimizedPlayer(minimizedPlayer, videoElement) {
		this.isMinimized = false;
		this.isClosed = true;
		this.currentTime = minimizedPlayer.currentTime;
		videoElement.currentTime = this.currentTime;
		videoElement.play();
		if (this.minimizedPlayerWrapper) {
			this.minimizedPlayerWrapper.style.display = "none";
			minimizedPlayer.pause();
		}
	}

	restorePlayer(videoElement) {
		this.isMinimized = false;
		this.isClosed = false;
		const wrapperDiv = this.minimizedPlayerWrapper;
		if (wrapperDiv) {
			const minimizedPlayer = wrapperDiv.querySelector("video-player");
			if (minimizedPlayer) {
				this.currentTime = minimizedPlayer.currentTime;
				videoElement.currentTime = this.currentTime;
				videoElement.play();
				wrapperDiv.style.display = "none";
				minimizedPlayer.pause();
			}
		}
	}

	async initializeEventData() {
		this.generateUniqueId().then((uniqueId) => {
			this.videoData.videoSessionID = uniqueId;
		});

		let sectionsObj = [];
		//round to more
		for (
			let i = 0;
			i < this.videoData.videoDurationSeconds;
			i = i + this.videoData.sectionDurationSeconds
		) {
			let end = i + this.videoData.sectionDurationSeconds;
			if (end > this.videoData.videoDurationSeconds) {
				end = this.videoData.videoDurationSeconds;
			}

			sectionsObj[sectionsObj.length] = {
				start: i,
				end: end,
				partNumber: sectionsObj.length + 1,
			};
		}
		this.sectionsObj = sectionsObj;
		this.sectionsCount = sectionsObj.length;
		this.sectionsPlayed = [];
		this.playLog = [];
	}

	async initializePlayer(materialId, styleIdentifier) {
		let wrapper = this.getVideoWrapperElement(styleIdentifier);

		return new Promise((resolve, reject) => {
			try {
				this.addWebComponentToWrapper(
					wrapper,
					this.videoData.fileLocation,
					this.videoData.linkText,
					this.videoData.playerWidth,
					this.videoData.playerHeight,
					this.videoData.ctaLayout,
					this.videoData.playerSound,
					this.videoData.useAutoDimensions
				);
				this.videoData.player = this.getCurrentVideoPlayerElement();

				Promise.all([this.loadCss(), this.loadJs()])
					.then(() => {
						this.state.playerReady = true;

						let link = this.videoData.link;
						let overlayHTML = this.getCtaHTML();
						this.addOverlayToWrapper(wrapper, overlayHTML);

						if (this.videoData.socialShow === "t") {
							document
								.getElementById("facebook-btn")
								.addEventListener("click", (event) => {
									event.preventDefault();
									this.shareOnFacebook(link);
								});
							document
								.getElementById("twitter-btn")
								.addEventListener("click", (event) => {
									event.preventDefault();
									this.shareOnTwitter(link);
								});
							document
								.getElementById("linkedin-btn")
								.addEventListener("click", (event) => {
									event.preventDefault();
									this.shareOnLinkedIn(link);
								});
							document
								.getElementById("whatsapp-btn")
								.addEventListener("click", (event) => {
									event.preventDefault();
									this.shareOnWhatsApp(link);
								});
						}

						this.addOverlayToWrapper(wrapper, customMuteIconHTML);

						this.addErrorListener(this.videoData.player, materialId);

						let overlay = wrapper.querySelector(".overlay");
						let overlayBackground = wrapper.querySelector(".overlayBackground");
						let cta = overlay.querySelector(".cta-area");
						let ctaHover = overlay.querySelector(".cta-area-hover");
						let richBlock = overlay.querySelector(".rich-block");
						this.videoData.ctaHover = ctaHover;
						this.videoData.richBlock = richBlock;
						this.videoData.overlayBackground = overlayBackground;
						let ctaContent = ctaHover.querySelector(".cta-content");
						let ctaValue = ctaContent.querySelector("strong");
						this.videoData.ctaContent = ctaValue;

						setTimeout(() => {
							this.addResponsive(wrapper);
							this.initMiniPlayer();
						});

						if (this.videoData.player) {
							this.videoData.player.addEventListener("play", (event) => {
								var isVisible = this.elementIsVisibleInViewport(
									this.getCurrentVideoPlayerElement(),
									false
								);
								if (!isVisible) {
									this.getCurrentVideoPlayerElement().pause();
								}

								if (wrapper.querySelector(".skeleton-loader") != null) {
									wrapper.querySelector(".skeleton-loader").style.display =
										"none";
								}

								window.addEventListener(
									"scroll",
									this.togglePlayOnViewPortVisibility
								);

								if (
									cta &&
									(this.videoData.ctaLayout === "top-right" ||
										this.videoData.ctaLayout === "bottom-left") &&
									this.videoData.ctaShowOnHover === "t" &&
									ctaHover
								) {
									this.videoData.ctaInner = cta;
								} else {
									this.videoData.ctaInner = "";
								}

								if (
									cta &&
									(this.videoData.ctaLayout === "top-right" ||
										this.videoData.ctaLayout === "bottom-left")
								) {
									setTimeout(function () {
										var content = overlay.querySelector(".cta-content");
										content.style.transition =
											"opacity 0.5s ease, transform 0.5s ease";
										content.style.opacity = "0";
										content.style.transform = "translateX(15px)";
										setTimeout(function () {
											content.style.display = "none";
										}, 300); // Adjust timing to match transition duration
									}, 10000); // 10 seconds

									var logo = overlay.querySelector(".logo");
									logo.addEventListener("mouseover", function () {
										var content = overlay.querySelector(".cta-content");
										content.style.display = "block";
										content.style.opacity = "1";
										content.style.transform = "translateX(0px)";
										content.style.maxHeight = overlay.offsetHeight * 0.9 + "px";
									});

									logo.addEventListener("mouseleave", function () {
										setTimeout(function () {
											var content = overlay.querySelector(".cta-content");
											content.style.transition =
												"opacity 0.5s ease, transform 0.5s ease";
											content.style.opacity = "0";
											content.style.transform = "translateX(15px)";
											setTimeout(function () {
												content.style.display = "none";
											}, 300); // Adjust timing to match transition duration
										}, 1000); // 1 second delay before collapsing again
									});
								}
							});

							window.addEventListener("resize", () => {
								this.addResponsive(wrapper);
							});

							overlay.addEventListener("mouseover", () => {
								this.addResponsive(wrapper);
								overlayBackground.style.display = "block";
								if (this.videoData.ctaShowOnHover === "t" && ctaHover) {
									ctaHover.style.display = "flex";
									if (this.videoData.ctaInner) {
										this.videoData.ctaInner.style.display = "none";
									}
								}
							});

							overlay.addEventListener("mouseleave", () => {
								overlayBackground.style.display = "none";
								if (
									this.videoData.ctaShowOnHover === "t" &&
									ctaHover &&
									this.state.complete
								) {
									ctaHover.style.display = "flex";
									if (this.videoData.ctaInner) {
										this.videoData.ctaInner.style.display = "none";
									}

									overlayBackground.style.display = "block";

									return;
								}

								if (this.videoData.ctaShowOnHover === "t" && ctaHover) {
									ctaHover.style.display = "none";
									if (this.videoData.ctaInner) {
										this.videoData.ctaInner.style.display = "flex";
									}
								}
							});

							this.addFullScreenListener(wrapper);
							this.addMuteListeners(wrapper);
							this.addReplayButtonListener();
						}
					})
					.catch((error) => {
						console.error(error);
					});
			} catch (error) {
				console.error(error);
			}

			resolve();
		});
	}

	addFullScreenListener(wrapper) {
		const scheduleFullscreenListener = () => {
			let player = wrapper.querySelector("video-player");

			if (player.shadowRoot) {
				let mediaTheme = player.shadowRoot.querySelector("media-theme");
				let mediaController =
					mediaTheme.shadowRoot.querySelector("media-controller");

				wrapper.addEventListener("fullscreenchange", () => {
					let customMuteIconWrapper = mediaController.querySelector(
						"[data-custom-mute-div]"
					);

					if (document.fullscreenElement !== null) {
						customMuteIconWrapper.style.display = "block";
						this.videoData.player.muted = false;

						let mediaCustomMuteButton = customMuteIconWrapper.querySelector(
							"[data-custom-mute-icon]"
						);
						let customMuteButton = wrapper.querySelector(
							"[data-custom-mute-icon]"
						);

						this.toggleMuteButton(mediaCustomMuteButton, true);
						this.toggleMuteButton(customMuteButton, true);
					} else {
						customMuteIconWrapper.style.display = "none";
					}
				});
			} else {
				setTimeout(scheduleFullscreenListener, 250);
			}
		};

		setTimeout(scheduleFullscreenListener, 250);
	}

	addMuteListeners(wrapper) {
		const scheduleMuteListener = () => {
			let player = wrapper.querySelector("video-player");

			if (player.shadowRoot) {
				let mediaTheme = player.shadowRoot.querySelector("media-theme");
				let mediaController =
					mediaTheme.shadowRoot.querySelector("media-controller");

				const mediaMuteButton =
					mediaController.querySelector("media-mute-button");
				if (!mediaMuteButton) {
					setTimeout(scheduleMuteListener, 250);

					return;
				}

				let muteIconDiv =
					'<div data-custom-mute-div style="height: 35px;' +
					"width: 35px;" +
					"position: absolute;" +
					"top: 20px;" +
					"left: 20px;" +
					"display: none;" +
					"fill: white;" +
					'cursor: pointer;">' +
					customMuteIconHTML +
					"</div>";

				let shadowRootStyle = document.createElement("style");
				shadowRootStyle.innerHTML =
					".hidden { display: none; } .unhidden { opacity: 1; }";
				mediaController.appendChild(shadowRootStyle);

				this.addOverlayToWrapper(mediaController, muteIconDiv);

				let customMuteButton = wrapper.querySelector("[data-custom-mute-icon]");
				this.toggleMuteButton(customMuteButton, true);

				customMuteButton.addEventListener("click", (event) => {
					event.stopPropagation();

					this.toggleMuteButton(customMuteButton);
					this.videoData.player.muted = !this.videoData.player.muted;
				});

				const mediaCustomMuteButton = mediaController.querySelector(
					"[data-custom-mute-icon]"
				);

				mediaCustomMuteButton.style.display = "block";

				mediaMuteButton.addEventListener("click", (event) => {
					this.toggleMuteButton(customMuteButton, true);
					this.toggleMuteButton(mediaCustomMuteButton, true);
				});

				mediaCustomMuteButton.addEventListener("click", (event) => {
					this.videoData.player.muted = !this.videoData.player.muted;
					this.toggleMuteButton(mediaCustomMuteButton, true);
					this.toggleMuteButton(customMuteButton, true);
				});
			} else {
				setTimeout(scheduleMuteListener, 250);
			}
		};

		setTimeout(scheduleMuteListener, 250);
	}

	addReplayButtonListener() {
		this.videoData.player.addEventListener("play", () => {
			this.state.complete = false;
			if (this.videoData.ctaHover && this.videoData.ctaShowOnHover === "t") {
				this.videoData.ctaHover.style.display = "none";
				if (this.videoData.ctaInner) {
					this.videoData.ctaInner.style.display = "flex";
				}
			}
		});
	}

	addErrorListener(player, materialId) {
		player.addEventListener("error", (event) => {
			if (event.detail.code === 2) {
				let divItem = document.querySelector("#div_item_" + materialId);
				if (divItem) {
					divItem.style.display = "none";
				}
			}
		});
	}

	toggleMuteButton(muteButton, reverse = false) {
		let svgMuteButton = muteButton.querySelector("g.muted");
		let svgUnMuteButton = muteButton.querySelector("g.unmuted");

		let muted = this.videoData.player.muted;

		if (reverse === true) {
			muted = !muted;
		}

		if (muted) {
			svgMuteButton.classList.add("hidden");
			svgMuteButton.classList.remove("unhidden");

			svgUnMuteButton.classList.add("unhidden");
			svgUnMuteButton.classList.remove("hidden");
		} else {
			svgMuteButton.classList.remove("hidden");
			svgMuteButton.classList.add("unhidden");

			svgUnMuteButton.classList.remove("unhidden");
			svgUnMuteButton.classList.add("hidden");
		}
	}

	getCurrentVideoPlayerElement() {
		return document.getElementById(
			"current-player-" + this.videoData.styleIdentifier
		);
	}

	getVideoWrapperElement(identifier = false) {
		if (!identifier) {
			identifier = this.videoData.styleIdentifier;
		}
		return document.getElementById("video-wrapper-" + identifier);
	}

	validateVideoContainerStyle(widthInput, heightInput, ctaLayout, auto) {
		var style = "";

		if (auto) {
			return "width: 100%; height: fit-content";
		}

		if ((!widthInput && !heightInput) || this.state.previewMode) {
			return "width: 336px; height: fit-content";
		}

		if (widthInput) {
			var width = parseInt(widthInput, 10);
			if (isNaN(width) || width < 200) {
				width = 200;
			}
			style += "width: " + width + "px; height: fit-content";
		}

		if (heightInput) {
			var height = parseInt(heightInput, 10);
			if (isNaN(height) || height < 200) {
				height = 200;
			}

			if (ctaLayout === "below-video") {
				height -= 55;
			} else if (ctaLayout === "tagline-bar") {
				height -= 42;
			}

			style += "height: " + height + "px;";
		}

		return style;
	}

	addWebComponentToWrapper(
		wrapper,
		playbackId,
		title,
		widthInput,
		heightInput,
		ctaLayout,
		soundOn,
		auto
	) {
		if (!wrapper) {
			return;
		}

		let muted = "muted";
		let autoplayValue = "muted";

		if (soundOn === "t") {
			muted = "";
			autoplayValue = "any";
		}

		let style = this.validateVideoContainerStyle(
			widthInput,
			heightInput,
			ctaLayout,
			auto
		);

		let link = this.videoData.link;
		let ctaShowOnHover = this.videoData.ctaShowOnHover;
		let layoutPosition = this.videoData.ctaLayout;
		let opacity = this.videoData.ctaBgOpacity;
		let bgColor = this.videoData.ctaBgColorHex;
		let textColor = this.videoData.ctaTextColorHex;
		let logo = this.videoData.campaignLogo;
		let text = this.videoData.linkText;
		let supportText = this.videoData.ctaSupportingText;
		let ctaButtonTextColor = this.videoData.ctaButtonTextColor;
		let ctaButtonColor = this.videoData.ctaButtonColor;
		let ctaButtonText = this.videoData.ctaButtonText;
		if (!ctaButtonText) {
			ctaButtonText = "Buy now!";
		}
		let ctaBgColor =
			"background-color: " +
			this.hexToRGBA(bgColor, this.convertOpacityToDecimal(opacity)) +
			";";
		let contentHTMLInner =
			"<strong>" + text + "</strong>" + "<p>" + supportText + "</p>";
		let ctaBlockHTML =
			'<div class="logo">' +
			'<img src="' +
			logo +
			'" alt="">' +
			"</div>" +
			'<div class="cta-content">' +
			contentHTMLInner +
			"</div>";
		let ctaAreaInner =
			'<div class="cta-area ' +
			layoutPosition +
			'">' +
			'<div class="cta ' +
			layoutPosition +
			'" style="' +
			ctaBgColor +
			"; color:" +
			textColor +
			'">' +
			ctaBlockHTML +
			"</div>" +
			"</div>";
		let ctaAreaHover =
			'<div class="cta-area-hover">' +
			'<div class="cta-area-hover-logo">' +
			'<img src="' +
			logo +
			'" class="logo" alt="">' +
			"</div>" +
			'<div class="cta-content">' +
			"<strong>" +
			text +
			"</strong>" +
			"<p>" +
			supportText +
			"</p>" +
			"</div>" +
			'<div class="cta-button">' +
			'<input class="cta-btn btn-default" type="button" data-copy-code="" style="border: 1px ' +
			ctaButtonColor +
			" solid; background:" +
			ctaButtonColor +
			";color: " +
			ctaButtonTextColor +
			';" value="' +
			ctaButtonText +
			'">' +
			"</div>" +
			"</div>";

		let playerHtml =
			'<div style="position: relative"><video-player id="current-player-' +
			this.videoData.styleIdentifier +
			'" autoplay="' +
			autoplayValue +
			'" ' +
			muted +
			' nohotkeys default-show-remaining-time="true" ' +
			'playback-id="' +
			playbackId +
			'" ' +
			'metadata-video-title="' +
			title +
			'" ' +
			'accent-color="#FF0000" ' +
			'style="' +
			style +
			'" >' +
			"</video-player>" +
			'<a class="overlay" href="' +
			link +
			'" target="_blank">' +
			ctaAreaInner +
			ctaAreaHover +
			"</a>" +
			"<div class='overlayBackground'/>" +
			"</div>";

		wrapper.insertAdjacentHTML("beforeend", playerHtml);
	}

	hexToRGBA(hex, opacity) {
		if (!hex) {
			return "black";
		}
		hex = hex.replace("#", "");
		let r = parseInt(hex.substring(0, 2), 16);
		let g = parseInt(hex.substring(2, 4), 16);
		let b = parseInt(hex.substring(4, 6), 16);
		return `rgba(${r}, ${g}, ${b}, ${opacity})`;
	}

	/**
	 * Converts a percentage or plain number to a decimal for CSS opacity.
	 * @param {string|number} opacityValue - The opacity value as a percentage or number.
	 * @returns {number} The decimal representation of the opacity.
	 */
	convertOpacityToDecimal(opacityValue) {
		// Check if the value is a string and ends with a percentage sign
		if (typeof opacityValue === "string" && opacityValue.trim().endsWith("%")) {
			// Remove the percentage sign and convert to number
			let percentage = parseFloat(opacityValue);
			return percentage / 100;
		} else {
			// Convert directly assuming the value is a number between 0 and 100
			return parseFloat(opacityValue) / 100;
		}
	}

	shareOnFacebook(url) {
		const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
			url
		)}`;
		window.open(
			facebookShareUrl,
			"facebook-share-dialog",
			"width=800,height=600"
		);
	}

	shareOnTwitter(url) {
		const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
			url
		)}`;
		window.open(
			twitterShareUrl,
			"twitter-share-dialog",
			"width=800,height=600"
		);
	}

	shareOnLinkedIn(url) {
		const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
			url
		)}`;
		window.open(
			linkedInShareUrl,
			"linkedin-share-dialog",
			"width=800,height=600"
		);
	}

	shareOnWhatsApp(url) {
		const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
			url
		)}`;
		window.open(
			whatsappShareUrl,
			"whatsapp-share-dialog",
			"width=800,height=600"
		);
	}

	getShareSocialHtml() {
		return `<div class="socialWrapper"><span>Share to:</span> <button class="socialIcon" id="facebook-btn">${facebookIconHtml}</button> <button class="socialIcon" id="twitter-btn">${twitterIconHtml}</button> <button class="socialIcon" id="linkedin-btn">${linkedinIconHtml}</button> <button class="socialIcon" id="whatsapp-btn">${whatsappIconHtml}</button></div>`;
	}

	getCtaHTML() {
		let link = this.videoData.link;
		let text = this.videoData.linkText;
		let ctaTaglineText = this.videoData.ctaTaglineText;
		let ctaButtonText = this.videoData.ctaButtonText;
		let ctaButtonTextColor = this.videoData.ctaButtonTextColor;
		let ctaButtonBgColor = this.videoData.ctaButtonColor;

		let supportText = this.videoData.ctaSupportingText;
		let logo = this.videoData.campaignLogo;
		let layoutPosition = this.videoData.ctaLayout;
		let textColor = this.videoData.ctaTextColorHex;
		let richText = this.videoData.richText;
		let richTextColor = this.videoData.richTextColor;

		let richShow = this.videoData.richShow;
		let socialShow = this.videoData.socialShow;
		let taglineShow = this.videoData.taglineShow;

		let shareSocialHtml = socialShow === "t" ? this.getShareSocialHtml() : "";

		if (!ctaButtonText) {
			ctaButtonText = "Buy now!";
		}

		let contentHTMLInner =
			"<strong>" + text + "</strong>" + "<p>" + supportText + "</p>";

		let bullet = '<span class="bullet">&#8226;</span>';
		let sliderContentHTML =
			'<span class="tagline-text">' +
			text +
			"</span>" +
			bullet +
			'<span class="tagline-text">' +
			supportText +
			"</span>";

		if (!ctaTaglineText) {
			ctaTaglineText = "please add tagline text";
		}

		sliderContentHTML +=
			bullet +
			'<span class="tagline-text" style="white-space: nowrap">' +
			ctaTaglineText +
			"</span>";

		let sliderHTML =
			'<div class="cta-slide" style="color: black;">' +
			'<div class="slide-content">' +
			sliderContentHTML +
			"</div>" +
			"</div>";
		let richContent =
			'<div class="logo">' +
			'<img src="' +
			logo +
			'" alt="">' +
			"</div>" +
			`<div class="rich-text-content" style="color:${richTextColor};">` +
			richText +
			"</div>";

		if (richShow !== "t" && layoutPosition === "below-video") {
			richContent =
				'<div class="logo">' +
				'<img src="' +
				logo +
				'" alt="">' +
				"</div>" +
				'<div class="rich-text-content" style="color:' +
				textColor +
				'">' +
				contentHTMLInner +
				"</div>";
		}

		if (richShow !== "t" && layoutPosition !== "below-video") {
			richContent = "";
		}

		let richTextBlock =
			`<div class="cta-rich-text" style="${
				taglineShow ? "margin-top: 32px;" : "margin-top: 12px;"
			}">` +
			richContent +
			`<div class="buttonWrapper" style="${
				shareSocialHtml ? "" : "border-top: none;"
			}">` +
			shareSocialHtml +
			`<div class="cta-button" style="color:${ctaButtonTextColor};">` +
			'<a href="' +
			link +
			'" class="cta-btn btn-default" target="_blank" type="button" style="background:' +
			ctaButtonBgColor +
			"; color: " +
			ctaButtonTextColor +
			';">' +
			ctaButtonText +
			"</a>" +
			"</div>" +
			"</div>" +
			"</div>";

		let ctaAreaOuter = `<div class="cta-area-outer"><div class="cta cta-slide-wrapper">
				${taglineShow ? sliderHTML : ""}
				${richTextBlock}
			</div></div>`;

		return '<div class="control-area" style=""></div>' + ctaAreaOuter;
	}

	addOverlayToWrapper(wrapper, overlay) {
		const tempDiv = document.createElement("div");
		tempDiv.classList.add("fade-in");
		tempDiv.innerHTML = overlay;

		wrapper.insertAdjacentElement("beforeend", tempDiv);

		setTimeout(() => {
			requestAnimationFrame(() => {
				tempDiv.classList.add("show");
			});
		}, 100);
	}

	loadCss() {
		return new Promise((resolve, reject) => {
			var cssID = "video-player-css";
			if (document.getElementById(cssID) === null) {
				const style = document.createElement("link");
				style.id = cssID;
				style.href = this.videoData.cssLocation + "/player.css";
				style.type = "text/css";
				style.rel = "stylesheet";
				style.onload = () => resolve();
				style.onerror = () => reject(`CSS load error: player.css`);
				document.head.appendChild(style);
			} else {
				resolve();
			}
		});
	}

	loadJs() {
		return new Promise((resolve, reject) => {
			var jsID = "video-player-js";
			if (document.getElementById(jsID) === null) {
				const script = document.createElement("script"); // create a script DOM node
				script.src = this.videoData.cssLocation + "/player.js";
				script.id = jsID;
				script.setAttribute("type", "text/javascript");
				script.onload = () => resolve();
				script.onerror = () => reject(`JS load error: player.js`);
				document.body.appendChild(script);
			} else {
				resolve();
			}
		});
	}

	fetchData(url) {
		var request = new XMLHttpRequest();
		request.open("GET", url);
		request.send();
	}

	populateSessionId(link) {
		let url = new URL(link);
		let searchParams = new URLSearchParams(url.search);
		searchParams.set("vsid", this.videoData.videoSessionID);
		url.search = searchParams.toString();

		return url;
	}

	eventTrigger(eventType, params = {}) {
		if (this.state.previewMode) {
			return;
		}

		if (!this.state.playerReady) {
			return;
		}

		switch (eventType) {
			case "impression":
				if (this.state.isViewed) {
					return;
				}
				var url = this.videoData.impressionURL;

				this.fetchData(url);
				this.state.isViewed = true;

				break;

			case "start":
				this.videoData.player.classList.remove("complete");
				this.state.complete = false;

				if (this.state.wasLaunched) {
					return;
				}

				var url = this.populateSessionId(
					this.videoData.eventURLs.videoEventStartURL
				);

				this.fetchData(url);
				this.state.wasLaunched = true;

				break;

			case "part":
				var url = this.populateSessionId(
					this.videoData.eventURLs.videoEventPartURL
				);

				var searchParams = new URLSearchParams(url.search);
				searchParams.set("pn", params.pn);
				searchParams.set("tp", params.tp);
				searchParams.set("ps", params.ps);
				url.search = searchParams.toString();

				this.fetchData(url);

				break;

			case "complete":
				var url = this.populateSessionId(
					this.videoData.eventURLs.videoEventCompleteURL
				);
				this.fetchData(url);
				this.videoData.player.classList.add("complete");
				this.state.complete = true;

				if (this.videoData.ctaHover && this.videoData.ctaShowOnHover === "t") {
					this.videoData.ctaHover.style.display = "flex";
					if (this.videoData.ctaInner) {
						this.videoData.ctaInner.style.display = "none";
					}
					this.videoData.overlayBackground.style.display = "block";

					let wrapper = this.getVideoWrapperElement(
						this.videoData.styleIdentifier
					);
					if (wrapper) {
						this.addResponsive(wrapper);
					}
				}

				this.state.wasLaunched = false;
				this.initializeEventData().then();

				break;

			default:
				break;
		}
	}

	processPosition(position) {
		let posString = position.toString();
		let myarr = posString.split(".");
		let seconds = parseInt(myarr[0]);
		let miliseconds = parseFloat(myarr[1]);
		if (miliseconds > 900000) {
			seconds++;
		}

		if (this.playLog && !this.playLog.includes(seconds)) {
			this.playLog.push(seconds);
		}

		if (
			(seconds % this.videoData.sectionDurationSeconds === 0 ||
				seconds === this.videoData.videoDurationSeconds) &&
			this.sectionsObj
		) {
			this.sectionsObj.find((obj, index) => {
				if (obj === undefined) {
					return;
				}
				if (obj.end === seconds) {
					if (
						this.playLog.includes(
							seconds - this.videoData.sectionDurationSeconds
						)
					) {
						this.eventTrigger("part", {
							pn: index + 1,
							tp: this.sectionsCount,
							ps: this.videoData.sectionDurationSeconds,
						});

						this.sectionsPlayed.push(this.sectionsObj[index]);
						delete this.sectionsObj[index];
						if (this.sectionsPlayed.length === this.sectionsCount) {
							this.eventTrigger("complete");
							this.removeScrollListener();

							this.videoData.player.style.setProperty("--play-button", "true");
						}
					}
				}
			});
		}
	}

	elementIsVisibleInViewport(el, debug = false) {
		if (!el) {
			if (debug) {
				console.log("Element is not visible in viewport");
			}

			return false;
		}

		var rect = el.getBoundingClientRect();
		var html = document.documentElement;

		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <= (window.innerHeight || html.clientHeight) &&
			rect.right <= (window.innerWidth || html.clientWidth)
		);
	}

	async generateUniqueId() {
		const userAgent = window.navigator.userAgent;
		const language = window.navigator.language;
		const timestamp = new Date().toISOString();

		const randomBuffer = new Uint8Array(32);
		crypto.getRandomValues(randomBuffer);
		const randomString = Array.from(randomBuffer)
			.map((b) => b.toString(16).padStart(2, "0"))
			.join("");

		const dataString = userAgent + language + timestamp + randomString;
		const data = new TextEncoder().encode(dataString);

		const hashBuffer = await crypto.subtle.digest("SHA-256", data);
		const hashArray = Array.from(new Uint8Array(hashBuffer));

		return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
	}
}

window.onload = function () {
	setTimeout(function () {
		window.scrollTo(0, 0);
	}, 200);
};