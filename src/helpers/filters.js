export const formatTime = (value) => {
  let year, month, date, hour, minute;

  let a = value.split('T');
  let b = a[0].split('-');
  // year = +b[0];
  // month = +b[1];
  // date = +b[2];
  [year, month, date] = b;

  let c;
  if(a[1]) {
    c = a[1].split(':');
    // hour = +c[0];
    // minute = +c[1];
    [hour, minute,] = c;
  }

  let now = new Date();

  if(year < now.getFullYear()){
    return (now.getFullYear()-year) + '年前' ;
  } else if(month < now.getMonth()+1) {
    return (now.getMonth()+1 - month) + '月前';
  } else if(date < now.getDate()) {
    return (now.getDate() - date) + '天前';
  } else if(hour < now.getHours()) {
    return (now.getHours() - hour) + '小时前';
  } else if (minute < now.getMinutes()) {
    return (now.getMinutes() - minute) + '分钟前';
  } else {
    return '刚刚';
  }
}

export const formatTab = (value, istop, isgood) => {
  if (istop) {
    return '置顶';
  }
  if (isgood) {
    return '精华';
  }
  switch(value) {
    case 'share': return '分享'; break;
    case 'ask': return '问答'; break;
    default : return '其他';
  }
}
