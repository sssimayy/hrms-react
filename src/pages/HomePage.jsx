import { Link } from "react-router-dom";
import IndexNavbar from "../components/indexNavBar";
import Footer from "../components/footer";

export default function HomePage() {
    return (
        <div>
            <IndexNavbar fixed />
            <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
                <div className="container mx-auto items-center flex flex-wrap">
                    <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
                        <div className="pt-32 sm:pt-0">
                            <h2 className="font-semibold text-4xl text-blueGray-600">
                                Human Resource Management System
                            </h2>
                            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                Sizin İçin buradayız..
                            </p>
                            <div className="mt-12">
                                <Link
                                    to="/auth/login"
                                >
                                    <a
                                        className="text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                                    >
                                        Giriş Yap
                                    </a>
                                </Link>
                                <Link
                                    to="/auth/register"
                                >
                                    <a
                                        className="ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                                    >
                                        Kayıt Ol
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/*img dosyası*/}
                <img
                    className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
                    src={require("../img/pattern_react.png").default}
                    alt="..."
                />
                <img
                    className="absolute top-0 b-auto  "
                    src={require("../img/cliparts-2.png").default}
                    alt="..."
                />
            </section>

            <Footer />
        </div>
    )
}