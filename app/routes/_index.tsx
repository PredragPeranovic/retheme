import type { V2_MetaFunction } from "@remix-run/react";
import { Outlet } from "@remix-run/react";
import { ThemeSwitcher } from "~/features/theme/ThemeSwitcher";

export const meta: V2_MetaFunction = () => {
    return [{ title: "Remix Theme Change" }];
};

export default function Index() {
    return (
        <>
            <div className="sticky top-0 z-30 w-full transition-all duration-300 shadow-sm bg-opacity-60 bg-base-100 text-base-content backdrop-blur">
                <nav className="navbar min-h-12 bg-base-100">
                    <div className="flex items-center flex-1 gap-1 lg:gap-2">
                        <div className="inline-flex text-lg font-semibold transition-all duration-200 md:text-2xl">
                            <span className="uppercase text-primary">
                                Application Title
                            </span>
                        </div>
                    </div>
                    {/* Right Navbar */}
                    <div className="flex-0">
                        <ThemeSwitcher />
                    </div>
                </nav>
            </div>
            <p className="max-w-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, aut modi.
                Animi exercitationem aspernatur hic impedit sint distinctio!
                Aperiam illum eaque perspiciatis distinctio eligendi dignissimos explicabo asperiores facere velit qui.
            </p>
            <Outlet />
        </>
    )
}
