export function VideoHouse({embedVideo}:{embedVideo:string}){
    return(
        <div className="flex  min-h-60  flex-1 flex-col my-6">
            <p className="text-2xl font-bold text-center my-5">Veja o video  </p>
    <iframe
        className="min-h-60 md:min-h-[420px] xl:min-h-[420px]"
        width={'100%'}
        height={"100%"}
    src={embedVideo}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
    </div>
    )
}