import { useState } from 'react'

const useModal = () => {
   const [isModalVisible, setIsModalVisible] = useState(false)

   const toggle = () => setIsModalVisible((prev) => !prev)

   return { toggle, isModalVisible }
}

export default useModal
