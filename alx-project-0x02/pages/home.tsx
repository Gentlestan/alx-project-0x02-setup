import Card from "@/components/common/Card"

const Home: React.FC = () => {
    return(
        <div className="text-center">
            <h1>Welcome to Home Page</h1>
            <Card title="Welcome" content="This is a welcome Card" />
            <Card title="About" content="This is about Card" />
        </div>
    )
}
export default Home