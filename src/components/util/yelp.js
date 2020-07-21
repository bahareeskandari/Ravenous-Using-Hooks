import React from 'react'
import SearchBar from '../SearchBar/SearchBar'

const apiKey =
  'RYZQu4qcpmV92yqbxWx2AjBqO0J4iNcO6d-_XysNW7w6GrnyBTYdDuv8zqD6eic26Nvfks2VwZ4YPmYNgDX2_yysfq6PyOxFZsG8dldDsVfv6gyLCiI_WUXoa5CDXnYx'
const yelp = {
  async searchYelp(term, location, sortBy) {
    return fetch(
      `https://localhost:9000/api/getBusinesses?term=${term}&location=${location}&sortBy=${sortBy}`,
      {headers: {Authorization: `Bearer ${apiKey}`}}
    )
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zipCode,
            }
          })
        }
      })
      .catch((error) => console.log(error))
  },
}
export default yelp
