import { create } from 'zustand'

type TypeNotification = 'win' | 'lose' | 'info'

interface INotificationStore {
	messege: string
	type: TypeNotification
	show: (messege: string, type?: TypeNotification) => void
}

export const useNotificationStore = create<INotificationStore>(set => ({
	messege: '',
	type: 'info',
	show: (messege, type, duration = 3000) => {
		set({ messege, type })
		setTimeout(() => {
			set({ messege: ''})
		}, duration)
	},
}))
