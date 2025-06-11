import NavBar from "@/components/ui/nav-bar";

export default async function PostLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <>
            <NavBar />
            <div className="px-4">{children}</div>
        </>
    );
}
