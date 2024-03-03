import { useState } from "react";
import './myStyle.css'

const NestedCommentsRenderer = ({ fileData }) => {
    return (
        fileData
        && fileData.length > 0
        && fileData.map((currComment, indx) => {
            const { name, message, reply } = currComment;
            const hasReplies = !!(reply && reply.length > 0);
            return (
                <>
                    <div className="comment_wrapper">
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