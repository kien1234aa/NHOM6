import React from "react";

const JobDetail = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center gap-4 mb-6">
        <img src="rose.png" alt="Logo" className="w-16 h-16 object-cover rounded" />
        <h1 className="text-3xl font-semibold">Tên Công Việc</h1>
      </div>

      <div className="p-8">
        <div className="text-xl font-medium mb-6">Công Ty</div>

        <div
          className="grid gap-5 mb-8"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}
        >
          {/* Vị trí */}
          <div className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg border-l-4 border-blue-600">
            <div className="text-xl text-blue-600">📍</div>
            <div>
              <div className="text-sm text-gray-500">Vị trí</div>
              <div className="font-semibold text-gray-800">Nhật Bản</div>
            </div>
          </div>
          {/* Thưởng lương */}
          <div className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg border-l-4 border-blue-600">
            <div className="text-xl text-blue-600">💰</div>
            <div>
              <div className="text-sm text-gray-500">Thưởng lương</div>
              <div className="font-semibold text-gray-800">Thương lượng</div>
            </div>
          </div>
          {/* Kinh nghiệm */}
          <div className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg border-l-4 border-blue-600">
            <div className="text-xl text-blue-600">👥</div>
            <div>
              <div className="text-sm text-gray-500">Kinh nghiệm</div>
              <div className="font-semibold text-gray-800">0 - 1 năm kinh nghiệm</div>
            </div>
          </div>
          {/* Ngày đăng tuyển */}
          <div className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg border-l-4 border-blue-600">
            <div className="text-xl text-blue-600">📅</div>
            <div>
              <div className="text-sm text-gray-500">Ngày đăng tuyển</div>
              <div className="font-semibold text-gray-800">
                12-06-2025 | Hết hạn trong: 8 Ngày nữa
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4 my-5">
          <button className="bg-blue-900 text-white py-3 px-8 rounded-md text-lg hover:bg-blue-700 transition">
            Nộp đơn ngay
          </button>
          <button className="bg-gray-200 text-gray-800 border border-gray-300 py-3 px-5 rounded-md text-lg hover:bg-gray-300 transition">
            ❤️ Lưu
          </button>
        </div>

        <div className="flex border-b-2 border-gray-200 mb-8">
          {["Mô tả", "Quyền lợi", "Kỹ năng yêu cầu", "Chi tiết công việc", "Liên hệ", "Về công ty"].map(
            (tab, idx) => (
              <div
                key={idx}
                className={`px-6 py-4 cursor-pointer text-gray-500 font-medium border-b-2 ${
                  idx === 0
                    ? "text-blue-600 border-blue-600"
                    : "border-transparent hover:text-blue-900"
                }`}
              >
                {tab}
              </div>
            )
          )}
        </div>

        <div className="text-lg text-gray-700">
          Mô tả công việc
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
