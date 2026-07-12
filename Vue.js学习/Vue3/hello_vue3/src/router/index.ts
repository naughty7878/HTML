import { createRouter, createWebHistory } from 'vue-router'
import Props from '@/views/01_props/Father.vue'
import Event from '@/views/02_custom-event/Father.vue'
import Bus from '@/views/03_mitt/Father.vue'
import Model from '@/views/04_v-model/Father.vue'
import AttrsListeners from '@/views/05_$attrs/Father.vue'
import RefChildrenParent from '@/views/06_$refs-$parent/Father.vue'
import ProvideInject from '@/views/07_provide-inject/Father.vue'
import Pinia from '@/views/08_pinia/Father.vue'
import Slot from '@/views/09_slot/Father.vue'

export default createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/props',
			component: Props
		},
		{
			path: '/event',
			component: Event
		},
		{
			path: '/mitt',
			component: Bus
		},
		{
			path: '/model',
			component: Model
		},
		{
			path: '/attrs',
			component: AttrsListeners
		},
		{
			path: '/ref-parent',
			component: RefChildrenParent
		},
		{
			path: '/provide-inject',
			component: ProvideInject
		},
		{
			path: '/pinia',
			component: Pinia
		},
		{
			path: '/slot',
			component: Slot
		},
	]
})