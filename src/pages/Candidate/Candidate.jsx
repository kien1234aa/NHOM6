import React from 'react';
import './Candidate.css';

function Candidate() {
  return (
    <div className="candidate-container">
      {/* Sidebar */}
      <aside className="candidate-sidebar">
        <img src="/logo.png" alt="Logo" className="candidate-logo" />

        <div className="candidate-user">
          <img src="/avatar.png" alt="User" />
          <div className="candidate-name">GG</div>
          <div className="candidate-email">gg@gmail.com</div>
        </div>

        <nav>
          <h4>Dashboard</h4>
          <ul>
            <li><a href="#"><span className="candidate-icon"></span>Dashboard</a></li>
          </ul>

          <h4>Quản lý job</h4>
          <ul>
            <li><a href="#" className="active"><span className="candidate-icon"></span>Tất cả công việc</a></li>
            <li><a href="#"><span className="candidate-icon"></span>Công ty</a></li>
          </ul>

          <h4>Quản lý job</h4>
          <ul>
            <li><a href="#"><span className="candidate-icon"></span>Tất cả ứng viên</a></li>
            <li><a href="#"><span className="candidate-icon"></span>Thêm ứng viên</a></li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="candidate-main">
        <header className="candidate-topbar">
          <div className="candidate-search">
            <input type="text" placeholder="Search..." />
            <button><i /></button>
          </div>
          <div className="candidate-user-avatar">
            <img src="/avatar.png" alt="User" />
          </div>
        </header>

        <div className="candidate-breadcrumb">
          Danh sách ứng viên <span className="candidate-home-icon" /> &gt; Danh sách ứng viên
        </div>

        <section className="candidate-filters">
          <div className="candidate-field">
            <label>Từ khoá</label>
            <input type="text" placeholder="Tìm kiếm" />
          </div>
          <div className="candidate-field">
            <label>Ngành nghề</label>
            <select>
              <option>chọn ngành nghề</option>
            </select>
          </div>
          <div className="candidate-field">
            <label>Công việc</label>
            <input type="text" placeholder="" />
          </div>
          <div className="candidate-buttons">
            <button className="candidate-apply"><i />Áp dụng</button>
            <button className="candidate-reset"><i />Huỷ bộ lọc</button>
          </div>
          <button className="candidate-btn-add">+ Thêm mới</button>
        </section>

        <div className="candidate-table-wrap">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>họ tên</th>
                <th>vị trí ứng tuyển</th>
                <th>công ty</th>
                <th>nguồn‑thời gian</th>
                <th>trạng thái</th>
                <th>chức năng</th>
              </tr>
            </thead>
            <tbody>
              {/* Dữ liệu động */}
            </tbody>
          </table>

          <div className="candidate-pagination">
            <button>prev</button>
            <button>next</button>
          </div>

          <div className="candidate-empty-state">
            Danh sách các ứng viên do nhà tuyển dụng tự thêm vào. Để có thể xem các ứng viên khác, vui lòng vào các menu trong mục "Quản lý Job" để xem.
          </div>
        </div>
      </main>
    </div>
  );
}

export default Candidate;
