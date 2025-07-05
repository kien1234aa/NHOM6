import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import Header from '../../component/Header/Header.jsx';


// Job Card Component
const JobCard = ({ job }) => {
    const [isSaved, setIsSaved] = useState(false);

    return (
        <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex space-x-4">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm text-center leading-tight">
                        {job.company.split(' ').map(word => word[0]).join('').substring(0, 3)}
                    </span>
                </div>

                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-red-600 hover:underline cursor-pointer mb-2">
                        {job.title}
                    </h3>

                    <p className="font-medium text-gray-900 mb-1">{job.company}</p>
                    <p className="text-gray-600 text-sm mb-3">{job.location}</p>

                    <div className="flex items-center space-x-6 text-sm text-gray-600 mb-3">
                        <span>{job.salary}</span>
                        <span>{job.type}</span>
                    </div>

                    <div className="flex items-center juq
                    stify-between">
                        <span className="text-xs text-gray-500">Cập nhật: {job.updated}</span>
                        <button
                            onClick={() => setIsSaved(!isSaved)}
                            className={`flex items-center space-x-1 text-sm ${isSaved ? 'text-red-500' : 'text-blue-600'} hover:underline`}
                        >
                            <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                            <span>Lưu</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Sidebar Component
const Sidebar = () => {
    return (
        <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 via-yellow-500 to-blue-500 rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-bold text-blue-600 mb-2">CareerLink.vn</h3>
                <p className="text-gray-600 mb-2">trên ứng dụng di động</p>
                <p className="text-gray-500 text-sm">Ứng tuyển mọi lúc mọi nơi</p>
            </div>

            <div className="mb-6">
                <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDIwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMzAwIiByeD0iMTAiIGZpbGw9IiNmNWY1ZjUiLz4KPHN2ZyB4PSI0MCIgeT0iNTAiIHdpZHRoPSIxMjAiIGhlaWdodD0iMjAwIiB2aWV3Qm94PSIwIDAgMTIwIDIwMCIgZmlsbD0ibm9uZSI+CjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMjAwIiByeD0iMTAiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHJ4PSI1IiBmaWxsPSIjZTBlMGUwIi8+CjxyZWN0IHg9IjEwIiB5PSIxMjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAiIHJ4PSI1IiBmaWxsPSIjZTBlMGUwIi8+CjxyZWN0IHg9IjEwIiB5PSIxNDAiIHdpZHRoPSI4MCIgaGVpZ2h0PSIxMCIgcng9IjUiIGZpbGw9IiNlMGUwZTAiLz4KPHN2ZyB4PSI2MCIgeT0iNDAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTUwIiB2aWV3Qm94PSIwIDAgMTAwIDE1MCIgZmlsbD0ibm9uZSI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTUwIiByeD0iMTAiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiByeD0iNSIgZmlsbD0iI2UwZTBlMCIvPgo8cmVjdCB4PSIxMCIgeT0iMTAwIiB3aWR0aD0iODAiIGhlaWdodD0iMTAiIHJ4PSI1IiBmaWxsPSIjZTBlMGUwIi8+CjxyZWN0IHg9IjEwIiB5PSIxMjAiIHdpZHRoPSI2MCIgaGVpZ2h0PSIxMCIgcng9IjUiIGZpbGw9IiNlMGUwZTAiLz4KPC9zdmc+Cjwvc3ZnPgo8L3N2Zz4K"
                    alt="App Preview"
                    className="w-full rounded-lg"
                />
            </div>

            <div className="flex space-x-2">
                <a href="#" className="flex-1 bg-gray-800 text-white text-center py-2 px-3 rounded text-xs hover:bg-gray-700 transition-colors">
                    📱 Google Play
                </a>
                <a href="#" className="flex-1 bg-gray-800 text-white text-center py-2 px-3 rounded text-xs hover:bg-gray-700 transition-colors">
                    🍎 App Store
                </a>
            </div>
        </div>
    );
};

// Main App Component
const App = () => {
    const [jobs] = useState([
        {
            id: 1,
            title: "Giao Dịch Viên Tài Chính Đối Tác PNJ Tại Hội Nghĩa",
            company: "Công Ty Cổ Phần Người Bạn Vàng",
            location: "Bình Dương",
            salary: "9 triệu - 20 triệu",
            type: "Nhân viên",
            updated: "6 phút trước"
        },
        {
            id: 2,
            title: "NHÂN VIÊN KỸ THUẬT SMT - CÔNG TY HÀN - BẮC NINH - 13TR THU NHẬP - 20TR",
            company: "Công ty TNHH Phát Triển Nhân Lực Quốc Gia HRVALU",
            location: "Bắc Ninh",
            salary: "10 triệu - 20 triệu",
            type: "Nhân viên",
            updated: "31 phút trước"
        },
        {
            id: 3,
            title: "Giao Dịch Viên Tài Chính Đối Tác PNJ Tại Tân Uyên",
            company: "Công Ty Cổ Phần Người Bạn Vàng",
            location: "Bình Dương",
            salary: "9 triệu - 20 triệu",
            type: "Nhân viên",
            updated: "6 phút trước"
        },
        {
            id: 4,
            title: "Nhân Viên Kinh Doanh B2B Dược Mỹ Phẩm Lương Cứng 10tr - Ba Đình Hà Nội",
            company: "CÔNG TY TNHH XNK CUỘC SỐNG TUỔI ĐẸP",
            location: "Hà Nội",
            salary: "10 triệu - 15 triệu",
            type: "Nhân viên",
            updated: "41 phút trước"
        },
        {
            id: 5,
            title: "Giao Dịch Viên Tài Chính Đối Tác PNJ Tại Thủ Dầu Một",
            company: "Công Ty Cổ Phần Người Bạn Vàng",
            location: "Bình Dương",
            salary: "9 triệu - 20 triệu",
            type: "Nhân viên",
            updated: "6 phút trước"
        }
    ]);

    return (
        <div className="min-h-screen bg-gray-50">
            <Header_2 />

            <main className="max-w-7xl mx-auto px-4 py-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h2 className="text-lg font-semibold">Kết quả tìm kiếm</h2>
                                    <p className="text-sm text-gray-600">
                                        <span className="text-orange-500 font-bold">38231</span> việc làm
                                    </p>
                                </div>
                                <div className="flex items-center space-x-4 text-sm">
                                    <span className="text-gray-600">Sắp xếp</span>
                                    <select className="border border-gray-300 rounded px-3 py-1">
                                        <option>Mới cập nhật</option>
                                        <option>Lương cao nhất</option>
                                        <option>Phù hợp nhất</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mb-4">
                                <button className="text-blue-600 text-sm hover:underline">
                                    🔔 Gửi thông báo cho tìm kiếm này
                                </button>
                            </div>

                            <div className="space-y-4">
                                {jobs.map(job => (
                                    <JobCard key={job.id} job={job} />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <Sidebar />
                    </div>
                </div>
            </main>

            {/* Zalo Chat Button */}
            <div className="fixed bottom-6 right-6 w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-blue-600 transition-colors">
                <span className="text-white font-bold text-sm">Zalo</span>
            </div>
        </div>
    );
};

export default App;