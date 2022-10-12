type AddressItemV2 = naver.maps.Service.AddressItemV2

type GeocodeResult = (AddressItemV2 | {error: string})[]
async function geocode(addresses: string[]) {
  return new Promise<GeocodeResult>((resolve, reject) => {
    const result: GeocodeResult = [];

    addresses.forEach((address, i) => {
      naver.maps.Service.geocode(
        { query: address },
        (status, response) => {
          if(status !== naver.maps.Service.Status.OK) {
            result[i] = {error: `[${status}] ${address} not found`};
            console.warn(`[${status}] ${address} not found`)
          } else {
            result[i] = response.v2.addresses[0];
          }
    
          if(result.filter(item => item !== undefined).length === addresses.length) {
            resolve(result);
          }
        }
      )
    })
  })
}

export default geocode;
