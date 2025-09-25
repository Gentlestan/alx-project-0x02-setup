import Button from "@/components/common/Button"
import Header from "@/components/layout/Header"

const About: React.FC = () => {
    return(
        <div>
            <Header />
            <h1 className="text-center mb-4">Welcome to About Page</h1>
            <div className="flex flex-col justify-center items-center gap-4">
                <Button size="small" shape="rounded-sm">small /sm</Button>
                <Button size="medium" shape="rounded-md">Medium/md</Button>
                <Button size="large" shape="rounded-full">Large/full</Button>
            </div>
        </div>
    )
}
export default About