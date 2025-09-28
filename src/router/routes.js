const routes = {
  '/': () => import('../pages/home/Home.js'),

  /*-------------------- ALGORITHMS AND DATA STRUCTURES --------------------*/
  /*-- Basics of solving algorithmic problems --*/
  '/algorithms_and_data_structures/basics_of_solving_algorithmic_problems':
    () =>
      import(
        '../pages/algorithms_and_data_structures/basics_of_solving_algorithmic_problems/main_page.js'
      ),
  /*-- basics of solving algorithmic problems - 01_Lesson --*/
  '/algorithms_and_data_structures/basics_of_solving_algorithmic_problems/01_lesson':
    () =>
      import(
        '../pages/algorithms_and_data_structures/basics_of_solving_algorithmic_problems/01_lesson.js'
      ),

  /*-------------------- Complete JavaScript Course --------------------*/
  /*-- bogdan_stashchuk-complete_javascript_course --*/
  '/bogdan_stashchuk-complete_javascript_course': () =>
    import('../pages/bogdan_stashchuk-complete_javascript_course/main_page.js'),

  /*-- bogdan_stashchuk-complete_javascript_course --*/
  '/bogdan_stashchuk-complete_javascript_course/introduction': () =>
    import(
      '../pages/bogdan_stashchuk-complete_javascript_course/introduction.js'
    ),

  /*-- bogdan_stashchuk-complete_javascript_course - 01_Lesson --*/
  '/bogdan_stashchuk-complete_javascript_course/01_lesson': () =>
    import('../pages/bogdan_stashchuk-complete_javascript_course/01_lesson.js'),

  /*-- basics of solving algorithmic problems - 02_Lesson --*/
  '/bogdan_stashchuk-complete_javascript_course/02_lesson': () =>
    import('../pages/bogdan_stashchuk-complete_javascript_course/02_lesson.js'),

  /*-- basics of solving algorithmic problems - 03_Lesson --*/
  '/basic_of_programming_and_databases/03_lesson': () =>
    import('../pages/bogdan_stashchuk-complete_javascript_course/03_lesson.js'),

  /*-- basics of solving algorithmic problems - 04_Lesson --*/
  '/basic_of_programming_and_databases/04_lesson': () =>
    import('../pages/bogdan_stashchuk-complete_javascript_course/04_lesson.js'),

  /*-- basics of solving algorithmic problems - 05_Lesson --*/
  '/basic_of_programming_and_databases/05_lesson': () =>
    import('../pages/bogdan_stashchuk-complete_javascript_course/05_lesson.js'),

  /*-- basics of solving algorithmic problems - 06_Lesson --*/
  '/basic_of_programming_and_databases/06_lesson': () =>
    import('../pages/bogdan_stashchuk-complete_javascript_course/06_lesson.js'),

  /*-- basics of solving algorithmic problems - 07_Lesson --*/
  '/basic_of_programming_and_databases/07_lesson': () =>
    import('../pages/bogdan_stashchuk-complete_javascript_course/07_lesson.js'),

  /*-- basics of solving algorithmic problems - 08_Lesson --*/
  '/basic_of_programming_and_databases/08_lesson': () =>
    import('../pages/bogdan_stashchuk-complete_javascript_course/08_lesson.js'),

  /*-- basics of solving algorithmic problems - 09_Lesson --*/
  '/basic_of_programming_and_databases/09_lesson': () =>
    import('../pages/bogdan_stashchuk-complete_javascript_course/09_lesson.js'),

  /*-- basics of solving algorithmic problems - 10_Lesson --*/
  '/basic_of_programming_and_databases/10_lesson': () =>
    import('../pages/bogdan_stashchuk-complete_javascript_course/10_lesson.js'),

  /*-- basics of solving algorithmic problems - 11_Lesson --*/
  '/basic_of_programming_and_databases/11_lesson': () =>
    import('../pages/bogdan_stashchuk-complete_javascript_course/11_lesson.js'),
}

const loadRoute = async (path) => {
  // Проверяем, если путь указывает на статический файл
  if (path.startsWith('/pages/')) {
    window.location.href = path // Перенаправляем браузер на статический HTML-файл
    return
  }

  // Загрузка компонентов через маршруты
  const loadComponent = routes[path] || routes['/']
  try {
    const module = await loadComponent()
    appContainer.innerHTML = '' // Очистка перед загрузкой новой страницы
    appContainer.appendChild(await module.default())
  } catch (error) {
    console.error('Ошибка загрузки страницы:', error)
    appContainer.innerHTML = '<h2>Ошибка загрузки страницы</h2>'
  }
}

export default routes
