// export const LOGIN = 'auth/signup/{}'
// export const USER_INFO = '/user/'
// export const ACTIVE_TESTS = '/tests/active/'
// export const QUIZ_DETAIL = '/tests/{slug}'
// export const QUIZ_RATING = '/tests/{slug}/rating'
// export const COMMENTS_LIST = '/tests/{slug}/comment'
// export const LIKE_COMMENT = '/tests/comment/{hash}/like'
// export const DISLIKE_COMMENT = '/tests/comment/{hash}/dislike'
// export const RUN_TEST = '/tests/{slug}/run'
// export const ATTEMPTS = '/tests/{slug}/attempts'
// export const QUIZ_STATUS = 'tests/run/{hash}/status'
// export const SAVE_ANSWER = '/tests/run/{hash}/save'
// export const STOP_QUIZ = '/tests/run/{hash}/stop'

export const COURSES_LIST = '/courses?populate=*'
export const ACADEMIES_LIST = '/academies/?populate=*'
export const ACADEMY_DETAIL = '/academies/{id}/?populate=*'
export const COURSE_DETAIL = '/courses/{id}/?populate=*'

export const CATEGORIES_LIST = '/categories'
export const CATEGORIES_COURSES_LIST = '/categories/{id}?populate=*'

export const MEETUPS_LIST = '/meetups'

export const LANGUAGES_COURSES_LIST = '/categories/1?populate=*'
export const PROGRAMMING_COURSES_LIST = '/categories/2?populate=*'
export const DESIGN_COURSES_LIST = '/categories/3?populate=*'
export const IT_COURSES_LIST = '/categories/4?populate=*'
export const SOFT_SKILLS_COURSES_LIST = '/categories/5?populate=*'

export const ACADEMIES_IN_YOUR_CITY_LIST = '/academies?filters[adress][$eq]=Бухара'
export const OFFLINE_COURSES_LIST = '/courses?filters[offline][$eq]=true'

export const JOBS_LIST = '/jobs'
