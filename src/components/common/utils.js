export function getMaxDate() {
    return new Date().toISOString().split('T')[0];
}


export function validateAccount(account) {
    const trimmedAccount = account.replace(/\s+/g, '');
    if (account.trim() === '' || account !== trimmedAccount) {
        return 'Tên tài khoản không được chứa khoảng trắng.';
    }
    return null;
}

export function trimUserData(userData) {
    return {
        id: userData.id,
        tenTaiKhoan: userData.tenTaiKhoan.replace(/\s+/g, ''),
        matKhau: userData.matKhau.trim(),
        vaiTro: userData.vaiTro.trim(), 
        hoSo: {
            hoTen: userData.hoSo.hoTen.trim().replace(/\s+/g, ' '),
            ngaySinh: userData.hoSo.ngaySinh.trim(),
            avatar: userData.hoSo.avatar.trim()
        },
    };
}

