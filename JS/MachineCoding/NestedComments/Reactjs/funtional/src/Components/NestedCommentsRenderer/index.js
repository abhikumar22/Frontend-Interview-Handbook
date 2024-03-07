import { useState } from "react";
import './myStyle.css'

const NestedCommentsRenderer = ({ fileData }) => {
    const [commentsData, setCommentsData] = useState([...fileData]);
    const [showEditor, setShowEditor] = useState('');
    const [inputChange, setInputChange] = useState(false);

    return (
        commentsData
        && commentsData.length > 0
        && commentsData.map((currComment, indx) => {
            const { name, message, reply } = currComment;
            const hasReplies = !!(reply && reply.length > 0);
            const isEditorEligible = (showEditor && showEditor.length > 0) ? !!(showEditor === name) : false;
            return (
                <>
                    <div
                        className="comment_wrapper"
                    >
                        <div className="profilePic">
                            <img
                                src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"}
                            />
                        </div>
                        <div className="content_section">
                            <div className="name">
                                {name}
                            </div>
                            <div className="message">
                                {message}
                            </div>
                            {!isEditorEligible &&
                                <button onClick={() => {
                                    setShowEditor(name);
                                }}>
                                    Reply
                                </button>}
                            {isEditorEligible &&
                                <>
                                    <input
                                        onChange={(e) => {
                                            setInputChange(e.target.value)
                                        }}
                                    />
                                    <button onClick={() => {
                                        let temp = {
                                            ...commentsData,
                                            reply: [
                                                reply || [],
                                                {
                                                    name: "new reply",
                                                    message: inputChange,
                                                }
                                            ]
                                        }
                                        setCommentsData([temp]);
                                        // console.log("**** commentsData",{temp},{reply},{commentsData});
                                    }}>
                                        Submit
                                    </button>
                                </>
                            }
                        </div>
                    </div>
                    {hasReplies &&
                        <div className="replies">
                            <NestedCommentsRenderer fileData={reply} />
                        </div>
                    }
                </>
            )
        })
    )
};

export default NestedCommentsRenderer;