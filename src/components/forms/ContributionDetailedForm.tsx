import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";


const ContributionDetailedForm = () => {
    const {id} = useParams();

    const VITE_WEBSERVICE_URL = import.meta.env.VITE_WEBSERVICE_URL || "";

    const [contribution, setContribution] = useState<any>(null);
    const [contributionImage, setContributionImage] = useState<string>();
    const [contributionFile, setContributionFile] = useState<string>();

    // 1. GET Contribution
    console.log(contribution)
    useEffect(() => {
        fetch(`${VITE_WEBSERVICE_URL}/contribution/${id}`, {
            method: "GET",
            headers: {
                "ngrok-skip-browser-warning": "69420",
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                return response.json();
            })
            .then(response => {
                setContribution(response);
                if(response.imageId) {
                    setContributionImage(`${VITE_WEBSERVICE_URL}/image/${response.imageId}`)
                }
                if(response.documentId) {
                    setContributionFile(`${VITE_WEBSERVICE_URL}/document/pdf/${response.documentId}`)
                }
            })
            .catch(error => console.error("Error fetching:", error));
    }, [id]);

    return (
        <div>
            <div>
                <h1>Title</h1>
            </div>
            <div className="shad-input">
                {contribution?.title}
            </div>
            <div>
                <h1>Content</h1>
            </div>
            <div className="shad-input">
                {contribution?.content}
            </div>
            {contributionImage && <div>
                    <div>
                        <h1>Image</h1>
                    </div>
                    <div className="flex flex-1 justify-center w-full h-full p-5 lg:p-10">
                        <img src={contributionImage} alt="image" className="object-contain w-[500px] h-[500px] "/>
                    </div>
                </div>
            }
            {contributionFile &&
                <div>
                    <h1>DOCUMENT</h1>
                    <iframe className={'w-full h-screen p-2'} src={contributionFile}/>
                </div>
            }
        </div>

    )
        ;
};
export default ContributionDetailedForm;