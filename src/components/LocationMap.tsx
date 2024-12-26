
const LocationMap = () => {
   return (
    <section className="container ">
        <div>
            <MapLocation/>
        </div>
  </section>
   )
}

function MapLocation(){
    return(
        <>
        <div className="mb-[50px]">
        <p className="mb-[32px] font-bold text-2xl" >Aonde Estamos</p>
        <div style={{ height: '400px', width: '100%' }}>
        <iframe
  width="100%"
  height="100%"
  loading="lazy"
  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBnn_SK-u5M9BYGIJQ8TDTssee0vJ_3v08
  &q=Av. do Contorno, 2905 - Santa Efigênia&zoom=15">
</iframe>
    </div>
        </div>

        </>
    )
}

export default LocationMap
