import { editAddressAPI } from "@/app/lib/services/address/addressService"
import { fetchUserDataAPI, isAuth, updateUserName } from "@/app/lib/services/auth/authService"
import { OrderRequest } from "@/app/lib/types/orderTypes"

export const updateUserData = async (orderData: OrderRequest) => {
  if (isAuth()) {
    // Edit address
    if (orderData.address.id !== 0) { // If addressId != 0, then there is an address that got edited
      await editAddressAPI(
        orderData.address.id,
        {
          country: orderData.address.country,
          city: orderData.address.city,
          address_text: orderData.address.address_text,
          is_default: true
        }
      )
    }
    
    // Initialize user name if missing
    let userData
    try {
      userData = await fetchUserDataAPI()
    } catch (error) {
      console.error('errorrrr')
    }
    if (!userData) { // User data is missing 
      const updatedUser = await updateUserName(orderData.user.first_name, orderData.user.last_name)
      console.log('updated user', updatedUser)
    }
  } else {
    // Save address to local storage for next time
    localStorage.setItem('address', JSON.stringify(orderData.address))

    // Save user info for next time
    localStorage.setItem('defaultUserData', JSON.stringify(orderData.user))
  }
}