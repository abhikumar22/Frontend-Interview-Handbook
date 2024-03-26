import useNotification from './components/Notification/useNotification'
const Entry = () => {
    const { toast } = useNotification();
    return (
        <div>
            <button onClick={() => {
                toast.success();
            }}>Success</button>

            <button onClick={() => {
                toast.error();
            }}>Error</button>

            <button onClick={() => {
                toast.info();
            }}>Info</button>
        </div>
    )
};

export default Entry;