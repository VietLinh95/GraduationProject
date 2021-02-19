import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { dataContent } from '../model/model.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  datas: dataContent[];
  constructor() { }

  ngOnInit() {
    this.datas = ([
      {
        metaImg: '../../assets/logo/iconlogo.png',
        metaName: 'bs: Lan Dung',
        metaTime: 'Được duyệt·4 ngày trước',
        titlePost: 'Xin kinh nghiệm cho con ăn dặm của các mẹ?',
        contentPost: 'Tôi không hiểu tại sao lại có thể loại đàn ông trơ như chồng mình, đẫ ngoại tình hiều lần còn coi việc đó là hết điều sức bình thường, không có gì to tát cả.Tôi với chồng sống với nhau 8 năm và có 2 đứa con rồi. Trước khi lấy anh tôi đã biết lịch sử tình trường của chồng cũng khá dày. Thế nhưng cái duyên cái số se cho chúng tôi thành vợ thành chồng nên đành chịu. Chồng tôi cũng giỏi và nhạy bén nên làm trưởng phòng kinh doanh trong một công ty tư nhân từ mấy năm nay. Với thu nhập tháng mấy chục triệu của anh, mẹ con tôi cũng có cuộc sống khá đàng hoàng.',
        imgPost: '../../assets/img_home/unnamed.webp'
      },
      {
        metaImg: '../../assets/logo/iconlogo.png',
        metaName: 'bs: Lan Dung',
        metaTime: 'Được duyệt·4 ngày trước',
        titlePost: 'Xin kinh nghiệm cho con ăn dặm của các mẹ?',
        contentPost: 'Tôi không hiểu tại sao lại có thể loại đàn ông trơ như chồng mình, đẫ ngoại tình hiều lần còn coi việc đó là hết điều sức bình thường, không có gì to tát cả.Tôi với chồng sống với nhau 8 năm và có 2 đứa con rồi. Trước khi lấy anh tôi đã biết lịch sử tình trường của chồng cũng khá dày. Thế nhưng cái duyên cái số se cho chúng tôi thành vợ thành chồng nên đành chịu. Chồng tôi cũng giỏi và nhạy bén nên làm trưởng phòng kinh doanh trong một công ty tư nhân từ mấy năm nay. Với thu nhập tháng mấy chục triệu của anh, mẹ con tôi cũng có cuộc sống khá đàng hoàng.',
        imgPost: '../../assets/img_home/unnamed.webp'
      }, 
      {
        metaImg: '../../assets/logo/iconlogo.png',
        metaName: 'bs: Lan Dung',
        metaTime: 'Được duyệt·4 ngày trước',
        titlePost: 'Xin kinh nghiệm cho con ăn dặm của các mẹ?',
        contentPost: 'Tôi không hiểu tại sao lại có thể loại đàn ông trơ như chồng mình, đẫ ngoại tình hiều lần còn coi việc đó là hết điều sức bình thường, không có gì to tát cả.Tôi với chồng sống với nhau 8 năm và có 2 đứa con rồi. Trước khi lấy anh tôi đã biết lịch sử tình trường của chồng cũng khá dày. Thế nhưng cái duyên cái số se cho chúng tôi thành vợ thành chồng nên đành chịu. Chồng tôi cũng giỏi và nhạy bén nên làm trưởng phòng kinh doanh trong một công ty tư nhân từ mấy năm nay. Với thu nhập tháng mấy chục triệu của anh, mẹ con tôi cũng có cuộc sống khá đàng hoàng.',
        imgPost: '../../assets/img_home/unnamed.webp'
      },
    ])
  }
}
