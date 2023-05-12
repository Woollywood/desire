import $ from "jquery";
import Swiper from "swiper/bundle";
import mixitup from "mixitup";
import { Fancybox } from "@fancyapps/ui";

/*
 !(i)
 Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 Или когда импортирован весь файл, например import "files/script.js";
 Неиспользуемый (не вызванный) код в итоговый файл не попадает.

 Если мы хотим добавить модуль следует его расскоментировать
 */
import {
	isWebp,
	headerFixed,
	togglePopupWindows,
	addTouchClass,
	addLoadedClass,
	menuInit,
} from "./modules";
/* Раскомментировать для использования */
// import { MousePRLX } from './libs/parallaxMouse'

/* Раскомментировать для использования */
// import AOS from 'aos'

/* Раскомментировать для использования */
// import Swiper, { Navigation, Pagination } from 'swiper'

// Включить/выключить FLS (Full Logging System) (в работе)
window["FLS"] = location.hostname === "localhost";

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML
 ! (i) необходимо для корректного отображения webp из css
 */
isWebp();
/* Добавление класса touch для HTML если браузер мобильный */
/* Раскомментировать для использования */
// addTouchClass();
/* Добавление loaded для HTML после полной загрузки страницы */
/* Раскомментировать для использования */
// addLoadedClass();
/* Модуль для работы с меню (Бургер) */
/* Раскомментировать для использования */
// menuInit()

/* Библиотека для анимаций ===============================================================================
 *  документация: https://michalsnik.github.io/aos
 */
// AOS.init();
// =======================================================================================================

// Паралакс мышей ========================================================================================
// const mousePrlx = new MousePRLX({})
// =======================================================================================================

// Фиксированный header ==================================================================================
// headerFixed()
// =======================================================================================================

/* Открытие/закрытие модальных окон ======================================================================
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * И на кнопку, которая вызывает окно так же повешай атрибут data-type="<название окна>"

 * На обертку(враппер) окна добавь класс _overlay-bg
 * На кнопку для закрытия окна добавь класс button-close
 */
/* Раскомментировать для использования */
// togglePopupWindows()
// =======================================================================================================

$(function () {
	$(".header__button").on("click", function () {
		$(".rightside-menu").addClass("rightside-menu_show");
	});

	$(".rightside-menu__close").on("click", function () {
		$(".rightside-menu").removeClass("rightside-menu_show");
	});

	var swiperTop = new Swiper(".swiper-top", {
		allowTouchMove: false,
		effect: "fade",
		pagination: {
			el: ".swiper-pagination",
		},
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
	});

	var swiperContact = new Swiper(".page-contact-swiper", {
		pagination: {
			el: ".swiper-pagination",
		},
	});

	var swiperBlog = new Swiper(".blog-swiper", {
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});

	if ($(".gallery__inner").length > 0) {
		var mixer = mixitup(".gallery__inner", {
			load: {
				filter: ".category-bedroom",
			},
		});
	}

	$.each($('.form__checkbox'), function(index, val) {
		if($(this).find('input').prop('checked') === true) {
			$(this).addClass('form__checkbox_active');
		}
	})

	$('.form__checkbox').on('click', function(event) {
		if($(this).hasClass('form__checkbox_active')) {
			$(this).find('input').prop('checked', false);
		} else {
			$(this).find('input').prop('checked', true);
		}
		$(this).toggleClass('form__checkbox_active');

		return false;
	})
});

Fancybox.bind("[data-fancybox]", {
	// Your custom options
});
