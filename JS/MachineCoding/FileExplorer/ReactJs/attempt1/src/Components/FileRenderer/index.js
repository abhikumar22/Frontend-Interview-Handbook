import { useState } from "react";

const FileRenderer = ({ fileData }) => {
    const [activeList, setActiveList] = useState([]);
    return (
        fileData
        && fileData.length > 0
        && fileData.map((currFolder, indx) => {
            const { name, subFolders = [] } = currFolder || {};
            const haveSubFolders = !!(subFolders && subFolders.length > 0);
            return (
                <div
                    key={name}
                    style={{ marginLeft: '1em', cursor: haveSubFolders ? 'pointer' : 'auto', margin: '1em' }}
                    onClick={(e) => {
                        if (activeList.indexOf(name) > -1) {
                            let kk = activeList.filter(x => x != name);
                            setActiveList(kk);
                            e.stopPropagation();
                            return;
                        }
                        setActiveList((prev) => [...prev, name]);
                        e.stopPropagation()
                    }}
                >
                    - {name}
                    {haveSubFolders && !!(activeList.indexOf(name) > -1)
                        && <div
                        >
                            <FileRenderer fileData={subFolders} />
                        </div>}
                </div>
            )
        })
    )
};

export default FileRenderer;