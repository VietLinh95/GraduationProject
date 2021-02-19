import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-hot-news.component.html',
  styleUrls: ['./list-hot-news.component.scss']
})
export class ListHotNewsComponent implements OnInit {

  data = [
    {
      title: "Rạch tầng sinh môn kiêng ăn gì? Những thực phẩm mẹ nên tránh xa",
      img: "../../assets/img_home/lam-cach-nao-de-sinh-con-gai-100x100.png",
      text: "Rạch tầng sinh môn là một thủ thuật phổ biến được bác sĩ dùng để hỗ trợ mẹ sinh em bé. Tuy nhiên, sau quá trình này, chị em cần chú ý đến chế độ dinh dưỡng hợp lý để vết thương mau lành và nhanh hồi phục sức khỏe. Vậy rạch tầng sinh môn kiêng ăn gì?",
      link: "https://www.marrybaby.vn/sau-khi-sinh/rach-tang-sinh-mon-kieng-an-gi"
    },
    {
      title: "Rạch tầng sinh môn kiêng ăn gì? Những thực phẩm mẹ nên tránh xa",
      img: "../../assets/img_home/lam-cach-nao-de-sinh-con-gai-100x100.png",
      text: "Rạch tầng sinh môn là một thủ thuật phổ biến được bác sĩ dùng để hỗ trợ mẹ sinh em bé. Tuy nhiên, sau quá trình này, chị em cần chú ý đến chế độ dinh dưỡng hợp lý để vết thương mau lành và nhanh hồi phục sức khỏe. Vậy rạch tầng sinh môn kiêng ăn gì?",
      link: "https://www.marrybaby.vn/sau-khi-sinh/rach-tang-sinh-mon-kieng-an-gi"
    },
    {
      title: "Rạch tầng sinh môn kiêng ăn gì? Những thực phẩm mẹ nên tránh xa",
      img: "../../assets/img_home/lam-cach-nao-de-sinh-con-gai-100x100.png",
      text: "Rạch tầng sinh môn là một thủ thuật phổ biến được bác sĩ dùng để hỗ trợ mẹ sinh em bé. Tuy nhiên, sau quá trình này, chị em cần chú ý đến chế độ dinh dưỡng hợp lý để vết thương mau lành và nhanh hồi phục sức khỏe. Vậy rạch tầng sinh môn kiêng ăn gì?",
      link: "https://www.marrybaby.vn/sau-khi-sinh/rach-tang-sinh-mon-kieng-an-gi"
    },
    {
      title: "Rạch tầng sinh môn kiêng ăn gì? Những thực phẩm mẹ nên tránh xa",
      img: "../../assets/img_home/lam-cach-nao-de-sinh-con-gai-100x100.png",
      text: "Rạch tầng sinh môn là một thủ thuật phổ biến được bác sĩ dùng để hỗ trợ mẹ sinh em bé. Tuy nhiên, sau quá trình này, chị em cần chú ý đến chế độ dinh dưỡng hợp lý để vết thương mau lành và nhanh hồi phục sức khỏe. Vậy rạch tầng sinh môn kiêng ăn gì?",
      link: "https://www.marrybaby.vn/sau-khi-sinh/rach-tang-sinh-mon-kieng-an-gi"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
