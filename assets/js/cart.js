$(document).ready(function () {
    var savedInfo = localStorage.getItem('dataPackage');

    if (savedInfo) {
        var dataPackage = JSON.parse(savedInfo);
        displayUserInfo(dataPackage);
    }
    function displayUserInfo(dataPackage) {
        var countSP = 0;
        for (var i = 0; i < dataPackage.length; i++) {
            let productImage = dataPackage[i].image
            let productName = dataPackage[i].name
            let productDiscount = dataPackage[i].discount
            let soLuong = 1
            let tdNew = `<tr>
                        <td> ${(countSP++)} </td>
                        <td> <img src="${productImage}" class="hinhdaidiFen w-100"> </td>
                        <td> ${productName} </td>
                        <td> ${soLuong} </td>
                        <td>$${productDiscount} </td>
                        <td>$${productDiscount * soLuong} </td>
                        <td>
                            <a id="delete_1" data-sp-ma="${i}" class="btn btn-danger btn-delete-sanpham">
                                <i class="fa fa-trash" aria-hidden="true"></i> Xóa
                            </a>
                        </td>
                    </tr>`
    
            $("#tableDS").append(tdNew)
        }
        $("#tableDS").on('click', '.btn-delete-sanpham', function () {
            var index = this.getAttribute('data-sp-ma');
            dataPackage.splice(index, 1);
            localStorage.setItem('dataPackage', JSON.stringify(dataPackage));
            location.reload(); // Làm mới trang để hiển thị thông tin đã được cập nhật
        })
       
    }


});
