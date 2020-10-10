jQuery(document).ready(function() {
	jQuery('button').on('click', function() {

		var val = [], value, s, students, x, y, z, w, u, q, k, l, g, f;

		students = jQuery('#val0').val();

		for (i=0; i < 10; i++) {
			value = '#val' + (parseInt(i)+1);
			val[i] = jQuery(value).val();
		}
		for (i=0; i < 10; i++) {
			if (val[i] != 0) {
				val[i] = parseInt(val[i]);
			} else {
				val[i] = 0;
			}
		}
		s = 0;
		for (i=0; i < 10; i++) {
			s = s + val[i];
			if (val[i] == 0) {
			} 
		}
		if (students == 0) {
			alert('Количество учеников не должно быть ровно нулю');
		}
		if(s != students) {
			alert('Число учеников не ровняться числу оценок. Всё будет выводиться НЕПРАВИЛЬНО!!!');
		}
		x = (val[1]*12) + (val[2]*32) + (val[3]*40);
		y = (val[4]*45) + (val[5]*55) + (val[6]*74) + (val[7]*90);
		z = (val[8]*96) + (val[9]*100);
		w = x + y + z;
		u = w / students;
		q = Math.round(u);
		l= 0.1;
		k = 0;
		for (i=0; i < 10; i++) {
			k = k + parseInt(val[i]*(i+1));
		}
		l = k / students;
		g = val[5] + val[6] + val[7] + val[8] + val[9];
		f = Math.round((g / students) * 100);
		jQuery('#result').html('Cтепень обучености класса(в порцентах): '+q+
			'<br>на 1-2 '+(val[0]+val[1])+' учеников, в процентах '+(((val[0]+val[1])/students)*100).toFixed(2)+
			'<br>на 3-4 '+(val[2]+val[3])+' учеников, в процентах '+(((val[2]+val[3])/students)*100).toFixed(2)+
			'<br>на 5-6 '+(val[4]+val[5])+' учеников, в процентах '+(((val[4]+val[5])/students)*100).toFixed(2)+
			'<br>на 7-8 '+(val[6]+val[7])+' учеников, в процентах '+(((val[6]+val[7])/students)*100).toFixed(2)+
			'<br>на 9-10 '+(val[8]+val[9])+' учеников, в процентах '+(((val[8]+val[9])/students)*100).toFixed(2)+
			'<br>Средний бал : '+(l).toFixed(2)+
			'<br>Kачество знаний (количество оценок 6-10): '+g+
			'<br>Kачество знаний (в процентах): '+f+' процентов<br><br>');
		
	});
	jQuery('#index').on('click', function () {
		window.location =this.href;
	});
});