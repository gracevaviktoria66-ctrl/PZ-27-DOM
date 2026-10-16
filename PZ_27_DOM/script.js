"use strict";
// ПЗ 27. Допишите код, используя DOM API.
// 1. Найдите #page-title, #task-form, #task-input, #task-list, #stats, #error.
const list = document.querySelector("#task-list");
const cards = document.querySelector("#task-form");
const title = document.querySelector("#page-title");
const card = document.querySelector("#task");
const statys = document.querySelector("#stats");
const straus = document.querySelector("#error");

// 2. Измените заголовок через textContent; назначьте data-id исходным карточкам.
title.textContent = "Мой список задач";
card.classList.toggle("done");
card.setAttribute("data-state","ready");

// 3. Реализуйте updateStats() для общего числа, выполненных и оставшихся.
const item = document.createElement("li");
item.className = "task";
item.textContent ="Проверить интерфейс";
list.append(item);
// item.remove();
// 4. Реализуйте createTask(text): createElement, textContent и append.
// 5. Обработайте submit формы и проверку trim().
// 6. Делегируйте click от #task-list: toggle / up / remove.
// 7. Вызовите updateStats() после любых изменений.
console.log("ПЗ 27: стартовый проект подключён");
list.addEventListener("click", (event) => {
const button = event.target.closest("button[data-action]");
if (!button) return;
const task = button.closest(".task");
if (!task) return;
});