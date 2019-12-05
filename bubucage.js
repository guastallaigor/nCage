(function() {
	//bubuCage 
	var main = function($) { 
		
		var self = $.bubuCage = new function(){};
		
		$.extend(self, {
			bubuCageImgs : [
				'https://ik.imagekit.io/6xhf1gnexgdgk/bubu/17e8045d-bc29-470a-b526-0eb7e9519748_kocMybfQh.png',
				'https://ik.imagekit.io/6xhf1gnexgdgk/bubu/250px-Brewmaster_model_iPZOSbXTj.png',
				'https://ik.imagekit.io/6xhf1gnexgdgk/bubu/427cf720-2e38-4397-8793-43c863a98c73_I_eGa_E92.png',
				'https://ik.imagekit.io/6xhf1gnexgdgk/bubu/1382165_482509375190070_567028056_n_Mc6XnSmW4.png',
				'https://ik.imagekit.io/6xhf1gnexgdgk/bubu/bETZI_q-rhuwbz7.png',
				'https://ik.imagekit.io/6xhf1gnexgdgk/bubu/Bruninho_jMekP13yx.png',
				'https://ik.imagekit.io/6xhf1gnexgdgk/bubu/Bubebu_2RsvbNTci.png',
				'https://ik.imagekit.io/6xhf1gnexgdgk/bubu/Bubeleza_igCJ2gm2d.png',
				'https://ik.imagekit.io/6xhf1gnexgdgk/bubu/Bubu_02_oyEcJARij.png',
				'https://ik.imagekit.io/6xhf1gnexgdgk/bubu/Bubu__1__H2RP3skpG.png',
				'https://ik.imagekit.io/6xhf1gnexgdgk/bubu/Bubu__2__pnFmupLiEJ.png',
				'https://ik.imagekit.io/6xhf1gnexgdgk/bubu/Bubu__3__nnaODmfGG.png',
				'https://ik.imagekit.io/6xhf1gnexgdgk/bubu/Bubu__gua_nOhowXwrE.png',
				'https://ik.imagekit.io/6xhf1gnexgdgk/bubu/Bubu_apaixonado_s7meL8eN67.png',
				'https://ik.imagekit.io/6xhf1gnexgdgk/bubu/Bubu_Cade_4T2ndJN_8u.png',
				'https://ik.imagekit.io/6xhf1gnexgdgk/bubu/Bubu_Bat_mhUS0yvT2.png',
				'https://ik.imagekit.io/6xhf1gnexgdgk/bubu/Bubu_Cabra_yremj2hIMM.png',
				'https://ik.imagekit.io/6xhf1gnexgdgk/bubu/Bubu__gua_nOhowXwrE.png',
				'https://ik.imagekit.io/6xhf1gnexgdgk/bubu/Bubu_caf__LF-K_QhuC.png',
				'https://ik.imagekit.io/6xhf1gnexgdgk/bubu/Bubu_capa_6AAPB7INO.png',
				'https://ik.imagekit.io/6xhf1gnexgdgk/bubu/Bubu_chola_mais_k-vrpKBY8.png',
				'https://ik.imagekit.io/6xhf1gnexgdgk/bubu/Bubu_Chapou_DNBBDOFeu.png',
				'https://ik.imagekit.io/6xhf1gnexgdgk/bubu/bUBU_CATIORO_9galz7e-d.png',
				'https://ik.imagekit.io/6xhf1gnexgdgk/bubu/Bubu_copo_HMwNwf_np.png',
				'https://ik.imagekit.io/6xhf1gnexgdgk/bubu/Bubu_dedo_meio_Aj3G0IkOg.png',
				'https://ik.imagekit.io/6xhf1gnexgdgk/bubu/Bubu_dedo_6rpThHFtR.png',
				'https://ik.imagekit.io/6xhf1gnexgdgk/bubu/Bubu_deitado_Y1Z-n7Cnv.png',
				'https://ik.imagekit.io/6xhf1gnexgdgk/bubu/Bubu_desconfiado__1__9Aadhyx8z.png',
				'https://ik.imagekit.io/6xhf1gnexgdgk/bubu/Bubu_desconfiado_beD4fKkZs.png',
				'https://ik.imagekit.io/6xhf1gnexgdgk/bubu/Bubu_famado_2_ZXSm0nK6u.png',
				'https://ik.imagekit.io/6xhf1gnexgdgk/bubu/bubu_fumado_Fzosx0cEfb.png',
				'https://ik.imagekit.io/6xhf1gnexgdgk/bubu/Bubu_famado_2_-_Copia_QODR91BF9.png',
				'https://ik.imagekit.io/6xhf1gnexgdgk/bubu/Bubu_dan_ando_9rIkyOATCQ.png',
				'https://ik.imagekit.io/6xhf1gnexgdgk/bubu/Bubu_fumado_1__AGfVie4HF.png',
				'https://ik.imagekit.io/6xhf1gnexgdgk/bubu/Bubu_Getz__FqWe9NOD.png',
				'https://ik.imagekit.io/6xhf1gnexgdgk/bubu/Bubu_fumante_4dBTwMXta.png',
				'https://ik.imagekit.io/6xhf1gnexgdgk/bubu/Bubu_mulher_wWELr7E9Q.png',
				'https://ik.imagekit.io/6xhf1gnexgdgk/bubu/Bubu_pedindo_p_sair_v5J99wnK_.png',
				'https://ik.imagekit.io/6xhf1gnexgdgk/bubu/Bubu_fumando_BZlIHLAyH.png',
				'https://ik.imagekit.io/6xhf1gnexgdgk/bubu/Bubu_latinha_GBXaQKjrH.png',
				'https://ik.imagekit.io/6xhf1gnexgdgk/bubu/Bubunda_fiZh7qta2.png',
				'https://ik.imagekit.io/6xhf1gnexgdgk/bubu/Bubu_Quietinho_ia9NOV7oq.png',
				'https://ik.imagekit.io/6xhf1gnexgdgk/bubu/Bubu_sonhando_LBtNM0WDr.png',
				'https://ik.imagekit.io/6xhf1gnexgdgk/bubu/Bubu_peitos_dTlkN54Qs.png',
				'https://ik.imagekit.io/6xhf1gnexgdgk/bubu/Bubu_sem_chapar_38Q3p9YGJQ.png',
				'https://ik.imagekit.io/6xhf1gnexgdgk/bubu/Bubu_tomando_uma_ipnTiJNW4Y.png',
				'https://ik.imagekit.io/6xhf1gnexgdgk/bubu/BUbu_novinhas_yc28O4JUr.png',
				'https://ik.imagekit.io/6xhf1gnexgdgk/bubu/Bubu_Xiu_q3jbAV8bH.png',
				'https://ik.imagekit.io/6xhf1gnexgdgk/bubu/Cabra_Bubu_RHkKwK1vg.png',
				'https://ik.imagekit.io/6xhf1gnexgdgk/bubu/chero2_lFk2_d9m5.png',
				'https://ik.imagekit.io/6xhf1gnexgdgk/bubu/Chapa__o_2OMu91wPM.png'
			],
			handleImages : function (lstImgs, time)
			{
				$.each($('img'), function(i,item) { 
					//Skip if image is already replaced
					if($.inArray($(item).attr('src'), lstImgs) == -1)
					{
						var h = $(item).height();
						var w = $(item).width();
						
						//If image loaded
						if(h > 0 && w > 0)
						{
							//Replace
							$(item).css('width', w + 'px').css('height', h + 'px');
							$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
						}
						else
						{
							//Replace when loaded
							$(item).load(function(){
								//Prevent 'infinite' loop
									if($.inArray($(item).attr('src'), lstImgs) == -1)
									{
										var h = $(item).height();
										var w = $(item).width();
										$(item).css('width', w + 'px').css('height', h + 'px');
										$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
									}
								});
							}
						}
					});
					
					//Keep replacing
					if(time > 0)
						setTimeout(function(){self.handleImages(lstImgs, time);},time);
				}
			});

		//Run on jQuery ready
		$(document).ready(function() {
			self.handleImages(self.bubuCageImgs, 3000);
		});
	};

	//Method to load jQuery
	function loadJS(src, callback) {
		var s = document.createElement('script');		
		s.type = 'text/javascript';
		s.async = true;
		document.getElementsByTagName('head')[0].appendChild(s);
		s.onreadystatechange = s.onload = function() {
			var state = s.readyState;			
			if (!callback.done && (!state || /loaded|complete/.test(state))) {
				callback.done = true;
				callback();
			}
		};
		s.src = src;
	}
	
	//Add jQuery if not present, then run main
	if(typeof jQuery == 'undefined') {
		loadJS(('https:' == document.location.protocol ? 'https://' : 'http://') + 'ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js', function(){
			console.log(jQuery, ':123')
			jQuery.noConflict();
			main(jQuery);
		});
	}else {
		main(jQuery);
	}
 })();