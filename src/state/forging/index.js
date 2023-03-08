import { ref, computed ,markRaw } from 'vue'

// 锻造书
let forgingBook = ref({
	id: '',
	name: '',
	img; '',
})

export {
	forgingBook,
}