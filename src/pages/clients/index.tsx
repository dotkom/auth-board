import RequiresLogin from "common/components/RequiresLogin";
import Overview from "clients";

const OverviewPage: React.FC = () => {
    return (
        <RequiresLogin>
            <Overview />
        </RequiresLogin>
    )
}

export default OverviewPage;