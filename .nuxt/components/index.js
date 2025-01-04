export { default as NuxtLogo } from '../../components/NuxtLogo.vue'
export { default as Tutorial } from '../../components/Tutorial.vue'
export { default as VuetifyLogo } from '../../components/VuetifyLogo.vue'
export { default as ChartBarChart } from '../../components/Chart/BarChart.vue'
export { default as ReportCustomerReport } from '../../components/Report/CustomerReport.vue'
export { default as ReportOrderReport } from '../../components/Report/OrderReport.vue'
export { default as ReportSalaryReport } from '../../components/Report/SalaryReport.vue'
export { default as ReportSalesReport } from '../../components/Report/SalesReport.vue'
export { default as ReportUserReport } from '../../components/Report/UserReport.vue'
export { default as ButtonAdd } from '../../components/button/ButtonAdd.vue'
export { default as ButtonComponent } from '../../components/button/ButtonComponent.vue'
export { default as ButtonFilter } from '../../components/button/ButtonFilter.vue'
export { default as ButtonWeb } from '../../components/button/ButtonWeb.vue'
export { default as IconsRightSvg } from '../../components/icons/RightSvg.vue'
export { default as InputFieldSuneditor } from '../../components/inputField/Suneditor.vue'
export { default as CardItem } from '../../components/card/CardItem.vue'
export { default as CardMaterials } from '../../components/card/CardMaterials.vue'
export { default as CardResultTraining } from '../../components/card/CardResultTraining.vue'
export { default as CardService } from '../../components/card/CardService.vue'
export { default as CardServiceOrder } from '../../components/card/CardServiceOrder.vue'
export { default as CardTeacherTraining } from '../../components/card/CardTeacherTraining.vue'
export { default as CardTeacherTrainingUsers } from '../../components/card/CardTeacherTrainingUsers.vue'
export { default as ServiceDetailServiceInfo } from '../../components/service/DetailServiceInfo.vue'
export { default as TitleHeader } from '../../components/title/TitleHeader.vue'
export { default as UserAvatar } from '../../components/user/Avatar.vue'
export { default as UserAvatarSiderbar } from '../../components/user/AvatarSiderbar.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
