export interface User {
  id: number
  name: string
  username: string
  email: string
  phone: string
  website: string
  address: UserAddress
  company: UserCompany
}

type UserCompany = {
  name: string
  catchPhrase: string
  bs: string
}

type UserAddress = {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: {
    lat: string
    lng: string
  }
}
