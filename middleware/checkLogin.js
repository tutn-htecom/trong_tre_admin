export default function ({ route, redirect }) {
    const loginTime = localStorage.getItem('timeLogin')
    const storedUser = JSON.parse(localStorage.getItem('user'));

    // Kiểm tra xem người dùng đã đăng nhập chưa
    if (loginTime || storedUser) {
        // Lấy thời gian hiện tại
        const currentTime = new Date().getTime()

        // Kiểm tra xem đã qua thời gian chờ đợi (ví dụ: 4 tiếng = 14400000 miligiây) hay chưa
        const expirationTime = 34400000 // 4 tiếng trong miligiây
        if (currentTime - parseInt(loginTime) > expirationTime) {
            // Thời gian đăng nhập đã hết hạn, tự động đăng xuất người dùng
            // Xóa thông tin người dùng và thời gian đăng nhập từ localStorage
            localStorage.removeItem('loginTime')
            localStorage.removeItem('user') // Nếu bạn lưu thông tin người dùng vào localStorage
            // Thực hiện hành động đăng xuất, chẳng hạn chuyển hướng đến trang đăng nhập
            redirect('/login');
        } else {
            // Người dùng vẫn còn đang nhập, tiếp tục
            console.log(storedUser)
            console.log('Đăng nhập thành công')
        }
    } else {
        // Người dùng chưa đăng nhập, thực hiện hành động đăng xuất hoặc chuyển hướng đến trang đăng nhập
        redirect('/login');
    }
}
