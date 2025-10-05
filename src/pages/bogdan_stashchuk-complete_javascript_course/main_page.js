export default function lecture_Theme_01() {
  const lecture = document.createElement('lecture')
  lecture.classList.add('lecture')
  lecture.innerHTML = `

<div class="header2__content">
<div class="header2__wrapper-1">
<!----- Bread Crumbs ----->
    <div class="header2__bread-crumbs">
        <a href="/home" class="back-link main__link-default">Home</a>                  
    </div><!--bread-crumbs-->

</div><!--header__wrapper-1-->
</div><!--header2 content -->

<!----- MAIN ----->
<div class="margin__main">
<div class="main">
    <div class="main__wrapper-1">
    <h1 class="main__title-1">Богдан Сташчук</h1>
    <h2 class="main__title-2">Полный Курс JavaScript</h2>
        
        <h3 class="main__title-3">Уроки</h3>
        <!----- Lessons ----->
        <ul class="main__list-1">

        <!----- INTRODUCTION ----->
        <li class="main__list-1-item">
            <a class="main__link-default" href="/bogdan_stashchuk-complete_javascript_course/introduction">
            Введение
            </a>
        </li>

        <!----- 01 LESSON ----->
        <li class="main__list-1-item">
            <a class="main__link-default" href="/bogdan_stashchuk-complete_javascript_course/01_lesson">
            1. Урок - Самое важное в JavaScript
            </a>
        </li>

        <!----- 02 LESSON ----->
        <li class="main__list-1-item">
            <a class="main__link-default" href="/bogdan_stashchuk-complete_javascript_course/02_lesson">
            2. Урок - Переменные и типы
            </a>
        </li>

        <!----- 03 LESSON ----->
        <li class="main__list-1-item">
            <a class="main__link-default" href="/bogdan_stashchuk-complete_javascript_course/03_lesson">
            3. Урок - Объекты
            </a>
        </li>

        <!----- 04 LESSON ----->
         <li class="main__list-1-item">
            <a class="main__link-default" href="/basic_of_programming_and_databases/04_lesson">
            4. Урок - Параллельное программирование. Архитектура. Программное управление.
            </a>
        </li>

        <!----- 05 LESSON ----->
        <li class="main__list-1-item">
            <a class="main__link-default" href="/basic_of_programming_and_databases/05_lesson">
            5. Урок - Функции. Программа. Выполнение.
            </a>
        </li>

        <!----- 06 LESSON ----->
        <li class="main__list-1-item">
            <a class="main__link-default" href="/basic_of_programming_and_databases/06_lesson">
            6. Урок - Код (условное деление)
            </a>
        </li>

        <!----- 07 LESSON ----->
        <li class="main__list-1-item">
            <a class="main__link-default" href="/basic_of_programming_and_databases/07_lesson">
            7. Урок - Память. Программирование. Данные. 
            </a>
        </li>

        <!----- 08 LESSON ----->
         <li class="main__list-1-item">
            <a class="main__link-default" href="/basic_of_programming_and_databases/08_lesson">
            8. Урок - Системы исчисления
            </a>
        </li>

        <!----- 09 LESSON ----->
        <li class="main__list-1-item">
            <a class="main__link-default" href="/basic_of_programming_and_databases/09_lesson">
            9. Урок - Память. Хранение данных. Программа.
            </a>
        </li>

        <!----- 10 LESSON ----->
        <li class="main__list-1-item">
            <a class="main__link-default" href="/basic_of_programming_and_databases/10_lesson">
            10. Урок - Инапсуляция. Наследование. Полиморфизм. 
            </a>
        </li>

        <li class="main__list-1-item">
            <a class="main__link-default" href="/basic_of_programming_and_databases/11_lesson">
            11. Урок - Динамические данные 
            </a>
        </li>

        </ul>
        </div><!--main__wrapper-1-->
        </div><!--main-->
        </div><!--margin__main
    `
  return lecture
}
