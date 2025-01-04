import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2fd7c704 = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _cbd766e6 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _4d9aeef8 = () => interopDefault(import('../pages/admin/complain/index.vue' /* webpackChunkName: "pages/admin/complain/index" */))
const _1fe738fb = () => interopDefault(import('../pages/admin/dashboard/index.vue' /* webpackChunkName: "pages/admin/dashboard/index" */))
const _36cd1eda = () => interopDefault(import('../pages/admin/materials/index.vue' /* webpackChunkName: "pages/admin/materials/index" */))
const _24203ec4 = () => interopDefault(import('../pages/admin/medias/index.vue' /* webpackChunkName: "pages/admin/medias/index" */))
const _4dc9827a = () => interopDefault(import('../pages/admin/notification/index.vue' /* webpackChunkName: "pages/admin/notification/index" */))
const _09f7e2f4 = () => interopDefault(import('../pages/admin/orders/index.vue' /* webpackChunkName: "pages/admin/orders/index" */))
const _62559fa0 = () => interopDefault(import('../pages/admin/parents/index.vue' /* webpackChunkName: "pages/admin/parents/index" */))
const _ffa8bb18 = () => interopDefault(import('../pages/admin/review-lesson/index.vue' /* webpackChunkName: "pages/admin/review-lesson/index" */))
const _12107a48 = () => interopDefault(import('../pages/admin/service/index.vue' /* webpackChunkName: "pages/admin/service/index" */))
const _2d00c4e7 = () => interopDefault(import('../pages/admin/students/index.vue' /* webpackChunkName: "pages/admin/students/index" */))
const _f066a518 = () => interopDefault(import('../pages/admin/teacher-training/index.vue' /* webpackChunkName: "pages/admin/teacher-training/index" */))
const _15ad70b2 = () => interopDefault(import('../pages/admin/videos/index.vue' /* webpackChunkName: "pages/admin/videos/index" */))
const _7fb08188 = () => interopDefault(import('../pages/admin/dashboard/customer_reports/index.vue' /* webpackChunkName: "pages/admin/dashboard/customer_reports/index" */))
const _212dde98 = () => interopDefault(import('../pages/admin/dashboard/salary/index.vue' /* webpackChunkName: "pages/admin/dashboard/salary/index" */))
const _2594fb31 = () => interopDefault(import('../pages/admin/dashboard/sales_report/index.vue' /* webpackChunkName: "pages/admin/dashboard/sales_report/index" */))
const _70173654 = () => interopDefault(import('../pages/admin/dashboard/user_report/index.vue' /* webpackChunkName: "pages/admin/dashboard/user_report/index" */))
const _2e739368 = () => interopDefault(import('../pages/admin/lsm/result-training/index.vue' /* webpackChunkName: "pages/admin/lsm/result-training/index" */))
const _5d23c7d0 = () => interopDefault(import('../pages/admin/lsm/students/index.vue' /* webpackChunkName: "pages/admin/lsm/students/index" */))
const _6016b75d = () => interopDefault(import('../pages/admin/lsm/teacher-training/index.vue' /* webpackChunkName: "pages/admin/lsm/teacher-training/index" */))
const _0bb69ece = () => interopDefault(import('../pages/admin/materials/create/index.vue' /* webpackChunkName: "pages/admin/materials/create/index" */))
const _43e1d26c = () => interopDefault(import('../pages/admin/materials/create_bg/index.vue' /* webpackChunkName: "pages/admin/materials/create_bg/index" */))
const _2021c73a = () => interopDefault(import('../pages/admin/medias/create/index.vue' /* webpackChunkName: "pages/admin/medias/create/index" */))
const _798fbd56 = () => interopDefault(import('../pages/admin/my/notification/index.vue' /* webpackChunkName: "pages/admin/my/notification/index" */))
const _c69e29f2 = () => interopDefault(import('../pages/admin/notification/create/index.vue' /* webpackChunkName: "pages/admin/notification/create/index" */))
const _62e5ed4d = () => interopDefault(import('../pages/admin/orders/create/index.vue' /* webpackChunkName: "pages/admin/orders/create/index" */))
const _de402934 = () => interopDefault(import('../pages/admin/review-lesson/form-review/index.vue' /* webpackChunkName: "pages/admin/review-lesson/form-review/index" */))
const _19a44f36 = () => interopDefault(import('../pages/admin/service/create/index.vue' /* webpackChunkName: "pages/admin/service/create/index" */))
const _6be8f80c = () => interopDefault(import('../pages/admin/students/create/index.vue' /* webpackChunkName: "pages/admin/students/create/index" */))
const _6884aabc = () => interopDefault(import('../pages/admin/system/about/index.vue' /* webpackChunkName: "pages/admin/system/about/index" */))
const _6790051a = () => interopDefault(import('../pages/admin/system/banner/index.vue' /* webpackChunkName: "pages/admin/system/banner/index" */))
const _77cecac0 = () => interopDefault(import('../pages/admin/system/configs/index.vue' /* webpackChunkName: "pages/admin/system/configs/index" */))
const _28fd3516 = () => interopDefault(import('../pages/admin/system/educational-ecosystem/index.vue' /* webpackChunkName: "pages/admin/system/educational-ecosystem/index" */))
const _1f1b577e = () => interopDefault(import('../pages/admin/system/support/index.vue' /* webpackChunkName: "pages/admin/system/support/index" */))
const _0db23e5a = () => interopDefault(import('../pages/admin/system/tax/index.vue' /* webpackChunkName: "pages/admin/system/tax/index" */))
const _600cb825 = () => interopDefault(import('../pages/admin/system/tutorial/index.vue' /* webpackChunkName: "pages/admin/system/tutorial/index" */))
const _0c9052cd = () => interopDefault(import('../pages/admin/teacher-training/create/index.vue' /* webpackChunkName: "pages/admin/teacher-training/create/index" */))
const _7228b295 = () => interopDefault(import('../pages/admin/teacher-training/training-result/index.vue' /* webpackChunkName: "pages/admin/teacher-training/training-result/index" */))
const _ed314b0c = () => interopDefault(import('../pages/admin/users/admins/index.vue' /* webpackChunkName: "pages/admin/users/admins/index" */))
const _10e2b6c0 = () => interopDefault(import('../pages/admin/users/parent/index.vue' /* webpackChunkName: "pages/admin/users/parent/index" */))
const _2e959d47 = () => interopDefault(import('../pages/admin/users/teachers/index.vue' /* webpackChunkName: "pages/admin/users/teachers/index" */))
const _0ad418f1 = () => interopDefault(import('../pages/admin/lsm/students/create/index.vue' /* webpackChunkName: "pages/admin/lsm/students/create/index" */))
const _12aae09b = () => interopDefault(import('../pages/admin/review-lesson/form-review/create/index.vue' /* webpackChunkName: "pages/admin/review-lesson/form-review/create/index" */))
const _f75fd9f2 = () => interopDefault(import('../pages/admin/users/admins/create/index.vue' /* webpackChunkName: "pages/admin/users/admins/create/index" */))
const _70b5d9a8 = () => interopDefault(import('../pages/admin/users/admins/roles/index.vue' /* webpackChunkName: "pages/admin/users/admins/roles/index" */))
const _5f26ad14 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _7522b19f = () => interopDefault(import('../pages/admin/dashboard/salary/_id/index.vue' /* webpackChunkName: "pages/admin/dashboard/salary/_id/index" */))
const _6dc16060 = () => interopDefault(import('../pages/admin/lsm/result-training/_id.vue' /* webpackChunkName: "pages/admin/lsm/result-training/_id" */))
const _eb970a8a = () => interopDefault(import('../pages/admin/lsm/students/_id/index.vue' /* webpackChunkName: "pages/admin/lsm/students/_id/index" */))
const _184a4870 = () => interopDefault(import('../pages/admin/lsm/teacher-training/_id/index.vue' /* webpackChunkName: "pages/admin/lsm/teacher-training/_id/index" */))
const _5c9f61ea = () => interopDefault(import('../pages/admin/materials/detail/_id.vue' /* webpackChunkName: "pages/admin/materials/detail/_id" */))
const _4b554d84 = () => interopDefault(import('../pages/admin/materials/edit/_id.vue' /* webpackChunkName: "pages/admin/materials/edit/_id" */))
const _7568e351 = () => interopDefault(import('../pages/admin/review-lesson/form-review/_id/index.vue' /* webpackChunkName: "pages/admin/review-lesson/form-review/_id/index" */))
const _0838aea0 = () => interopDefault(import('../pages/admin/students/edit/_id.vue' /* webpackChunkName: "pages/admin/students/edit/_id" */))
const _744cc508 = () => interopDefault(import('../pages/admin/system/configs/_id.vue' /* webpackChunkName: "pages/admin/system/configs/_id" */))
const _4ffc563d = () => interopDefault(import('../pages/admin/teacher-training/training-result/_id.vue' /* webpackChunkName: "pages/admin/teacher-training/training-result/_id" */))
const _208aaf36 = () => interopDefault(import('../pages/admin/users/admins/_id/index.vue' /* webpackChunkName: "pages/admin/users/admins/_id/index" */))
const _07446f8b = () => interopDefault(import('../pages/admin/users/parent/_id/index.vue' /* webpackChunkName: "pages/admin/users/parent/_id/index" */))
const _097e869c = () => interopDefault(import('../pages/admin/users/teachers/_id/index.vue' /* webpackChunkName: "pages/admin/users/teachers/_id/index" */))
const _43b668bb = () => interopDefault(import('../pages/admin/lsm/students/_id/detail/index.vue' /* webpackChunkName: "pages/admin/lsm/students/_id/detail/index" */))
const _20b51df9 = () => interopDefault(import('../pages/admin/lsm/teacher-training/_id/create/index.vue' /* webpackChunkName: "pages/admin/lsm/teacher-training/_id/create/index" */))
const _cd281192 = () => interopDefault(import('../pages/admin/lsm/teacher-training/_id/create_course/index.vue' /* webpackChunkName: "pages/admin/lsm/teacher-training/_id/create_course/index" */))
const _be98be7a = () => interopDefault(import('../pages/admin/users/parent/_id/complain/index.vue' /* webpackChunkName: "pages/admin/users/parent/_id/complain/index" */))
const _d7d66874 = () => interopDefault(import('../pages/admin/users/parent/_id/history_service/index.vue' /* webpackChunkName: "pages/admin/users/parent/_id/history_service/index" */))
const _edb4078c = () => interopDefault(import('../pages/admin/users/teachers/_id/change-level/index.vue' /* webpackChunkName: "pages/admin/users/teachers/_id/change-level/index" */))
const _80e9392a = () => interopDefault(import('../pages/admin/users/teachers/_id/change-service/index.vue' /* webpackChunkName: "pages/admin/users/teachers/_id/change-service/index" */))
const _ae72c396 = () => interopDefault(import('../pages/admin/users/teachers/_id/course-history/index.vue' /* webpackChunkName: "pages/admin/users/teachers/_id/course-history/index" */))
const _4be13946 = () => interopDefault(import('../pages/admin/users/teachers/_id/edit/index.vue' /* webpackChunkName: "pages/admin/users/teachers/_id/edit/index" */))
const _4c87f7ba = () => interopDefault(import('../pages/admin/users/teachers/_id/recharge/index.vue' /* webpackChunkName: "pages/admin/users/teachers/_id/recharge/index" */))
const _69bf6c16 = () => interopDefault(import('../pages/admin/users/teachers/_id/training-results/index.vue' /* webpackChunkName: "pages/admin/users/teachers/_id/training-results/index" */))
const _71d70f9e = () => interopDefault(import('../pages/admin/lsm/teacher-training/_id/detail/abc.vue' /* webpackChunkName: "pages/admin/lsm/teacher-training/_id/detail/abc" */))
const _49aba7ff = () => interopDefault(import('../pages/admin/users/teachers/_id/recharge/history/index.vue' /* webpackChunkName: "pages/admin/users/teachers/_id/recharge/history/index" */))
const _6ebc6aaa = () => interopDefault(import('../pages/admin/dashboard/salary/_id/create/_date_l.vue' /* webpackChunkName: "pages/admin/dashboard/salary/_id/create/_date_l" */))
const _6d071747 = () => interopDefault(import('../pages/admin/lsm/students/_id/detail/_id_lesson/index.vue' /* webpackChunkName: "pages/admin/lsm/students/_id/detail/_id_lesson/index" */))
const _7e9b6392 = () => interopDefault(import('../pages/admin/lsm/teacher-training/_id/detail/_course_id/index.vue' /* webpackChunkName: "pages/admin/lsm/teacher-training/_id/detail/_course_id/index" */))
const _0b397f5b = () => interopDefault(import('../pages/admin/lsm/teacher-training/_id/edit/_course_id.vue' /* webpackChunkName: "pages/admin/lsm/teacher-training/_id/edit/_course_id" */))
const _4ed3fd32 = () => interopDefault(import('../pages/admin/users/teachers/_id/training-results/_results_id.vue' /* webpackChunkName: "pages/admin/users/teachers/_id/training-results/_results_id" */))
const _26735de8 = () => interopDefault(import('../pages/admin/lsm/students/_id/detail/_id_lesson/edit/index.vue' /* webpackChunkName: "pages/admin/lsm/students/_id/detail/_id_lesson/edit/index" */))
const _56c83eac = () => interopDefault(import('../pages/admin/lsm/teacher-training/_id/detail/_course_id/create/index.vue' /* webpackChunkName: "pages/admin/lsm/teacher-training/_id/detail/_course_id/create/index" */))
const _27b5517f = () => interopDefault(import('../pages/admin/lsm/teacher-training/_id/detail/_course_id/teachers/index.vue' /* webpackChunkName: "pages/admin/lsm/teacher-training/_id/detail/_course_id/teachers/index" */))
const _4b0604b2 = () => interopDefault(import('../pages/admin/lsm/teacher-training/_id/detail/_course_id/edit/_id_lesson.vue' /* webpackChunkName: "pages/admin/lsm/teacher-training/_id/detail/_course_id/edit/_id_lesson" */))
const _d3f62116 = () => interopDefault(import('../pages/admin/lsm/students/_id/detail/_id_lesson/_id_baihoc/index.vue' /* webpackChunkName: "pages/admin/lsm/students/_id/detail/_id_lesson/_id_baihoc/index" */))
const _e218643a = () => interopDefault(import('../pages/admin/complain/_id/index.vue' /* webpackChunkName: "pages/admin/complain/_id/index" */))
const _2b7e63df = () => interopDefault(import('../pages/admin/orders/_id/index.vue' /* webpackChunkName: "pages/admin/orders/_id/index" */))
const _7a3ab31b = () => interopDefault(import('../pages/admin/parents/_id/index.vue' /* webpackChunkName: "pages/admin/parents/_id/index" */))
const _4a733942 = () => interopDefault(import('../pages/admin/review-lesson/_id/index.vue' /* webpackChunkName: "pages/admin/review-lesson/_id/index" */))
const _0ae1d75c = () => interopDefault(import('../pages/admin/students/_id/index.vue' /* webpackChunkName: "pages/admin/students/_id/index" */))
const _16eda703 = () => interopDefault(import('../pages/admin/materials/_id/create/index.vue' /* webpackChunkName: "pages/admin/materials/_id/create/index" */))
const _8d87a13e = () => interopDefault(import('../pages/admin/materials/_id/histories/index.vue' /* webpackChunkName: "pages/admin/materials/_id/histories/index" */))
const _430b1cba = () => interopDefault(import('../pages/admin/medias/_id/edit.vue' /* webpackChunkName: "pages/admin/medias/_id/edit" */))
const _23a98f3e = () => interopDefault(import('../pages/admin/orders/_id/lesson/index.vue' /* webpackChunkName: "pages/admin/orders/_id/lesson/index" */))
const _2c05b568 = () => interopDefault(import('../pages/admin/service/_id/edit/index.vue' /* webpackChunkName: "pages/admin/service/_id/edit/index" */))
const _54e83402 = () => interopDefault(import('../pages/admin/service/_id/lesson-content/index.vue' /* webpackChunkName: "pages/admin/service/_id/lesson-content/index" */))
const _4e260052 = () => interopDefault(import('../pages/admin/service/_id/lesson-price/index.vue' /* webpackChunkName: "pages/admin/service/_id/lesson-price/index" */))
const _184c1f65 = () => interopDefault(import('../pages/admin/service/_id/sale/index.vue' /* webpackChunkName: "pages/admin/service/_id/sale/index" */))
const _73bf2744 = () => interopDefault(import('../pages/admin/students/_id/detail/index.vue' /* webpackChunkName: "pages/admin/students/_id/detail/index" */))
const _32c25b6f = () => interopDefault(import('../pages/admin/videos/_id/create/index.vue' /* webpackChunkName: "pages/admin/videos/_id/create/index" */))
const _298564fd = () => interopDefault(import('../pages/admin/videos/_id/edit/index.vue' /* webpackChunkName: "pages/admin/videos/_id/edit/index" */))
const _bdee9e78 = () => interopDefault(import('../pages/admin/materials/_id/histories/_id_list.vue' /* webpackChunkName: "pages/admin/materials/_id/histories/_id_list" */))
const _56520e88 = () => interopDefault(import('../pages/admin/students/_id/detail/_package_id/index.vue' /* webpackChunkName: "pages/admin/students/_id/detail/_package_id/index" */))
const _3e035339 = () => interopDefault(import('../pages/admin/students/_id/detail/_package_id/create/index.vue' /* webpackChunkName: "pages/admin/students/_id/detail/_package_id/create/index" */))
const _dd382b44 = () => interopDefault(import('../pages/admin/students/_id/detail/_package_id/edit/_lesson_id.vue' /* webpackChunkName: "pages/admin/students/_id/detail/_package_id/edit/_lesson_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/inspire",
    component: _2fd7c704,
    name: "inspire"
  }, {
    path: "/login",
    component: _cbd766e6,
    name: "login"
  }, {
    path: "/admin/complain",
    component: _4d9aeef8,
    name: "admin-complain"
  }, {
    path: "/admin/dashboard",
    component: _1fe738fb,
    name: "admin-dashboard"
  }, {
    path: "/admin/materials",
    component: _36cd1eda,
    name: "admin-materials"
  }, {
    path: "/admin/medias",
    component: _24203ec4,
    name: "admin-medias"
  }, {
    path: "/admin/notification",
    component: _4dc9827a,
    name: "admin-notification"
  }, {
    path: "/admin/orders",
    component: _09f7e2f4,
    name: "admin-orders"
  }, {
    path: "/admin/parents",
    component: _62559fa0,
    name: "admin-parents"
  }, {
    path: "/admin/review-lesson",
    component: _ffa8bb18,
    name: "admin-review-lesson"
  }, {
    path: "/admin/service",
    component: _12107a48,
    name: "admin-service"
  }, {
    path: "/admin/students",
    component: _2d00c4e7,
    name: "admin-students"
  }, {
    path: "/admin/teacher-training",
    component: _f066a518,
    name: "admin-teacher-training"
  }, {
    path: "/admin/videos",
    component: _15ad70b2,
    name: "admin-videos"
  }, {
    path: "/admin/dashboard/customer_reports",
    component: _7fb08188,
    name: "admin-dashboard-customer_reports"
  }, {
    path: "/admin/dashboard/salary",
    component: _212dde98,
    name: "admin-dashboard-salary"
  }, {
    path: "/admin/dashboard/sales_report",
    component: _2594fb31,
    name: "admin-dashboard-sales_report"
  }, {
    path: "/admin/dashboard/user_report",
    component: _70173654,
    name: "admin-dashboard-user_report"
  }, {
    path: "/admin/lsm/result-training",
    component: _2e739368,
    name: "admin-lsm-result-training"
  }, {
    path: "/admin/lsm/students",
    component: _5d23c7d0,
    name: "admin-lsm-students"
  }, {
    path: "/admin/lsm/teacher-training",
    component: _6016b75d,
    name: "admin-lsm-teacher-training"
  }, {
    path: "/admin/materials/create",
    component: _0bb69ece,
    name: "admin-materials-create"
  }, {
    path: "/admin/materials/create_bg",
    component: _43e1d26c,
    name: "admin-materials-create_bg"
  }, {
    path: "/admin/medias/create",
    component: _2021c73a,
    name: "admin-medias-create"
  }, {
    path: "/admin/my/notification",
    component: _798fbd56,
    name: "admin-my-notification"
  }, {
    path: "/admin/notification/create",
    component: _c69e29f2,
    name: "admin-notification-create"
  }, {
    path: "/admin/orders/create",
    component: _62e5ed4d,
    name: "admin-orders-create"
  }, {
    path: "/admin/review-lesson/form-review",
    component: _de402934,
    name: "admin-review-lesson-form-review"
  }, {
    path: "/admin/service/create",
    component: _19a44f36,
    name: "admin-service-create"
  }, {
    path: "/admin/students/create",
    component: _6be8f80c,
    name: "admin-students-create"
  }, {
    path: "/admin/system/about",
    component: _6884aabc,
    name: "admin-system-about"
  }, {
    path: "/admin/system/banner",
    component: _6790051a,
    name: "admin-system-banner"
  }, {
    path: "/admin/system/configs",
    component: _77cecac0,
    name: "admin-system-configs"
  }, {
    path: "/admin/system/educational-ecosystem",
    component: _28fd3516,
    name: "admin-system-educational-ecosystem"
  }, {
    path: "/admin/system/support",
    component: _1f1b577e,
    name: "admin-system-support"
  }, {
    path: "/admin/system/tax",
    component: _0db23e5a,
    name: "admin-system-tax"
  }, {
    path: "/admin/system/tutorial",
    component: _600cb825,
    name: "admin-system-tutorial"
  }, {
    path: "/admin/teacher-training/create",
    component: _0c9052cd,
    name: "admin-teacher-training-create"
  }, {
    path: "/admin/teacher-training/training-result",
    component: _7228b295,
    name: "admin-teacher-training-training-result"
  }, {
    path: "/admin/users/admins",
    component: _ed314b0c,
    name: "admin-users-admins"
  }, {
    path: "/admin/users/parent",
    component: _10e2b6c0,
    name: "admin-users-parent"
  }, {
    path: "/admin/users/teachers",
    component: _2e959d47,
    name: "admin-users-teachers"
  }, {
    path: "/admin/lsm/students/create",
    component: _0ad418f1,
    name: "admin-lsm-students-create"
  }, {
    path: "/admin/review-lesson/form-review/create",
    component: _12aae09b,
    name: "admin-review-lesson-form-review-create"
  }, {
    path: "/admin/users/admins/create",
    component: _f75fd9f2,
    name: "admin-users-admins-create"
  }, {
    path: "/admin/users/admins/roles",
    component: _70b5d9a8,
    name: "admin-users-admins-roles"
  }, {
    path: "/",
    component: _5f26ad14,
    name: "index"
  }, {
    path: "/admin/dashboard/salary/:id",
    component: _7522b19f,
    name: "admin-dashboard-salary-id"
  }, {
    path: "/admin/lsm/result-training/:id?",
    component: _6dc16060,
    name: "admin-lsm-result-training-id"
  }, {
    path: "/admin/lsm/students/:id",
    component: _eb970a8a,
    name: "admin-lsm-students-id"
  }, {
    path: "/admin/lsm/teacher-training/:id",
    component: _184a4870,
    name: "admin-lsm-teacher-training-id"
  }, {
    path: "/admin/materials/detail/:id?",
    component: _5c9f61ea,
    name: "admin-materials-detail-id"
  }, {
    path: "/admin/materials/edit/:id?",
    component: _4b554d84,
    name: "admin-materials-edit-id"
  }, {
    path: "/admin/review-lesson/form-review/:id",
    component: _7568e351,
    name: "admin-review-lesson-form-review-id"
  }, {
    path: "/admin/students/edit/:id?",
    component: _0838aea0,
    name: "admin-students-edit-id"
  }, {
    path: "/admin/system/configs/:id",
    component: _744cc508,
    name: "admin-system-configs-id"
  }, {
    path: "/admin/teacher-training/training-result/:id",
    component: _4ffc563d,
    name: "admin-teacher-training-training-result-id"
  }, {
    path: "/admin/users/admins/:id",
    component: _208aaf36,
    name: "admin-users-admins-id"
  }, {
    path: "/admin/users/parent/:id",
    component: _07446f8b,
    name: "admin-users-parent-id"
  }, {
    path: "/admin/users/teachers/:id",
    component: _097e869c,
    name: "admin-users-teachers-id"
  }, {
    path: "/admin/lsm/students/:id/detail",
    component: _43b668bb,
    name: "admin-lsm-students-id-detail"
  }, {
    path: "/admin/lsm/teacher-training/:id?/create",
    component: _20b51df9,
    name: "admin-lsm-teacher-training-id-create"
  }, {
    path: "/admin/lsm/teacher-training/:id?/create_course",
    component: _cd281192,
    name: "admin-lsm-teacher-training-id-create_course"
  }, {
    path: "/admin/users/parent/:id/complain",
    component: _be98be7a,
    name: "admin-users-parent-id-complain"
  }, {
    path: "/admin/users/parent/:id/history_service",
    component: _d7d66874,
    name: "admin-users-parent-id-history_service"
  }, {
    path: "/admin/users/teachers/:id/change-level",
    component: _edb4078c,
    name: "admin-users-teachers-id-change-level"
  }, {
    path: "/admin/users/teachers/:id/change-service",
    component: _80e9392a,
    name: "admin-users-teachers-id-change-service"
  }, {
    path: "/admin/users/teachers/:id/course-history",
    component: _ae72c396,
    name: "admin-users-teachers-id-course-history"
  }, {
    path: "/admin/users/teachers/:id/edit",
    component: _4be13946,
    name: "admin-users-teachers-id-edit"
  }, {
    path: "/admin/users/teachers/:id/recharge",
    component: _4c87f7ba,
    name: "admin-users-teachers-id-recharge"
  }, {
    path: "/admin/users/teachers/:id/training-results",
    component: _69bf6c16,
    name: "admin-users-teachers-id-training-results"
  }, {
    path: "/admin/lsm/teacher-training/:id?/detail/abc",
    component: _71d70f9e,
    name: "admin-lsm-teacher-training-id-detail-abc"
  }, {
    path: "/admin/users/teachers/:id/recharge/history",
    component: _49aba7ff,
    name: "admin-users-teachers-id-recharge-history"
  }, {
    path: "/admin/dashboard/salary/:id/create/:date_l?",
    component: _6ebc6aaa,
    name: "admin-dashboard-salary-id-create-date_l"
  }, {
    path: "/admin/lsm/students/:id/detail/:id_lesson",
    component: _6d071747,
    name: "admin-lsm-students-id-detail-id_lesson"
  }, {
    path: "/admin/lsm/teacher-training/:id?/detail/:course_id",
    component: _7e9b6392,
    name: "admin-lsm-teacher-training-id-detail-course_id"
  }, {
    path: "/admin/lsm/teacher-training/:id?/edit/:course_id",
    component: _0b397f5b,
    name: "admin-lsm-teacher-training-id-edit-course_id"
  }, {
    path: "/admin/users/teachers/:id/training-results/:results_id?",
    component: _4ed3fd32,
    name: "admin-users-teachers-id-training-results-results_id"
  }, {
    path: "/admin/lsm/students/:id/detail/:id_lesson/edit",
    component: _26735de8,
    name: "admin-lsm-students-id-detail-id_lesson-edit"
  }, {
    path: "/admin/lsm/teacher-training/:id?/detail/:course_id/create",
    component: _56c83eac,
    name: "admin-lsm-teacher-training-id-detail-course_id-create"
  }, {
    path: "/admin/lsm/teacher-training/:id?/detail/:course_id/teachers",
    component: _27b5517f,
    name: "admin-lsm-teacher-training-id-detail-course_id-teachers"
  }, {
    path: "/admin/lsm/teacher-training/:id?/detail/:course_id/edit/:id_lesson",
    component: _4b0604b2,
    name: "admin-lsm-teacher-training-id-detail-course_id-edit-id_lesson"
  }, {
    path: "/admin/lsm/students/:id/detail/:id_lesson/:id_baihoc",
    component: _d3f62116,
    name: "admin-lsm-students-id-detail-id_lesson-id_baihoc"
  }, {
    path: "/admin/complain/:id",
    component: _e218643a,
    name: "admin-complain-id"
  }, {
    path: "/admin/orders/:id",
    component: _2b7e63df,
    name: "admin-orders-id"
  }, {
    path: "/admin/parents/:id",
    component: _7a3ab31b,
    name: "admin-parents-id"
  }, {
    path: "/admin/review-lesson/:id",
    component: _4a733942,
    name: "admin-review-lesson-id"
  }, {
    path: "/admin/students/:id",
    component: _0ae1d75c,
    name: "admin-students-id"
  }, {
    path: "/admin/materials/:id/create",
    component: _16eda703,
    name: "admin-materials-id-create"
  }, {
    path: "/admin/materials/:id/histories",
    component: _8d87a13e,
    name: "admin-materials-id-histories"
  }, {
    path: "/admin/medias/:id/edit",
    component: _430b1cba,
    name: "admin-medias-id-edit"
  }, {
    path: "/admin/orders/:id/lesson",
    component: _23a98f3e,
    name: "admin-orders-id-lesson"
  }, {
    path: "/admin/service/:id/edit",
    component: _2c05b568,
    name: "admin-service-id-edit"
  }, {
    path: "/admin/service/:id/lesson-content",
    component: _54e83402,
    name: "admin-service-id-lesson-content"
  }, {
    path: "/admin/service/:id/lesson-price",
    component: _4e260052,
    name: "admin-service-id-lesson-price"
  }, {
    path: "/admin/service/:id/sale",
    component: _184c1f65,
    name: "admin-service-id-sale"
  }, {
    path: "/admin/students/:id/detail",
    component: _73bf2744,
    name: "admin-students-id-detail"
  }, {
    path: "/admin/videos/:id/create",
    component: _32c25b6f,
    name: "admin-videos-id-create"
  }, {
    path: "/admin/videos/:id/edit",
    component: _298564fd,
    name: "admin-videos-id-edit"
  }, {
    path: "/admin/materials/:id/histories/:id_list",
    component: _bdee9e78,
    name: "admin-materials-id-histories-id_list"
  }, {
    path: "/admin/students/:id/detail/:package_id",
    component: _56520e88,
    name: "admin-students-id-detail-package_id"
  }, {
    path: "/admin/students/:id/detail/:package_id/create",
    component: _3e035339,
    name: "admin-students-id-detail-package_id-create"
  }, {
    path: "/admin/students/:id/detail/:package_id/edit/:lesson_id?",
    component: _dd382b44,
    name: "admin-students-id-detail-package_id-edit-lesson_id"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
