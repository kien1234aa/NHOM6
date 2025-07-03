import HomeBanner from "../../component/HomeBanner/HomeBanner";
import HomeJobList from "../../component/HomeJobList/HomeJobList";
import './HomePage.css'
const HomePage = () => {
    return (
        <div className="home-wrapper">
            <HomeBanner />
            <div className="home-jobs">
                <div className="home-job">
                    <h2>Việc làm hấp dẫn</h2>
                    <a href="#">
                        Xem tất cả <i className="fas fa-chevron-right"></i>
                    </a>
                </div>
            </div>
            <div className="job-list-wrapper">
                <HomeJobList />
                <HomeJobList />
                <HomeJobList />
                <HomeJobList />
                <HomeJobList />
                <HomeJobList />
                <HomeJobList />
                <HomeJobList />
            </div>
        </div>
    );
}

export default HomePage;