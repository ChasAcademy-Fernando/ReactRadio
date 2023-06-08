const Station = ({image, bg, audio, name}) => {
 

    return ( 

        <div className=" mx-auto md:max-w-xl p-4 bg h-fit" style={{backgroundColor: '#'+bg}}>   
            <div className=" flex items-center space-x-20">
                <div>
                    <img src={image} alt="Radio Station Logo"  width={300} height={300}/>
                </div>
                <div className=" flex-col" >
                    <div>
                        <h2 className=" text-4xl">
                            {name}
                        </h2>
                    </div>
                    <div>
                        <audio controls src={audio}>
                           
                        </audio>
                    </div>
                </div>

            </div>
        </div>
     );
}
 
export default Station;