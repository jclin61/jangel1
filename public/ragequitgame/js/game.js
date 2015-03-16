 $(document).ready(function(){
 	$('#accepted').click(function(){
 		$("#accepted1").fadeOut();
 		$("#accepted2").delay(500).fadeIn();
 		$("#white").delay(1500).fadeOut();

 		level1();
 		GameDelay = setTimeout(function(){GameStart();},3000); 	
 		hit = 0;	
 	});

 			
 		function GameStart()
 		{
 			collision();
 			
 			Game = setInterval(function(){randomTroll();},500);
 			random_level = setInterval(function(){game_levels();},3000);
 			setTimeout(function(){
 				$("#damsel").attr('src','/ragequitgame/test_image/damsel2.png');
 			},5000);
 			setTimeout(function(){
 				$("#damsel").attr('src','/ragequitgame/test_image/damsel1.png');
 			},5200);
 			setTimeout(function(){
 				$("#damsel").attr('src','/ragequitgame/test_image/damsel2.png');
 			},5400);
 			setTimeout(function(){
 				$("#damsel").attr('src','/ragequitgame/test_image/damsel1.png');
 			},7000);
 			setTimeout(function(){
 				$("#damsel").attr('src','/ragequitgame/test_image/damsel2.png');
 			},7200);
 			Derpina = setTimeout(function(){
 				$("#damsel").attr('src','/ragequitgame/test_image/damsel3.png');
 				$("textarea").append('&#xA;'+'==> Derpina is worried!' + '&#xA;');
 			},10000);

 			function game_levels()
 			{		
 				var randomizer = (Math.random());

 				if(randomizer<=0.35)
 				{
 					level1();
 					$("textarea").append("    => Movement restored <=" + "&#xA;");
 				}
 				else if(randomizer>0.35 && randomizer <=0.75)
 				{
 					level2();
 				}
 				else
 				{
 					level3();
 				}
 			}
 		}	

 		function collision()
 		{
 			$(document).keydown(function(){
	 			var rider_pos = ($('#rider').position());
			 	var troll_pos = ($('#troll').position());
			 	// console.log(rider_pos.top, rider_pos.left);
	 			if(rider_pos.top < troll_pos.top + 55 && rider_pos.top + 55 > troll_pos.top && rider_pos.left < troll_pos.left + 55 && rider_pos.left + 60 > troll_pos.left)
	 			{
	 				// console.log(rider_pos.top, rider_pos.left);
	 				hit = 1+hit
	 				$("textarea").append("=> You hit Troll" + "&#xA;");
	 				$("#hits").html(hit);
	 				console.log (hit);
	 				$("#rider").css({
	 					top: '420px',
	 					left:'10px'});
	 			}
	 			if(hit == 3)
	 			{
	 				clearInterval(Game);
	 				clearInterval(random_level);
	 				clearTimeout(GameDelay);
	 				clearTimeout(Derpina);
	 				$('textarea').scrollTop(9999);
	 				$("#damsel").attr('src','/ragequitgame/test_image/damsel1.png');
	 				$("#rider").attr('src','/ragequitgame/test_image/rider9.png').css({
	 					height: '150px',
	 					top: '300px',
	 					left:'20px'});
	 				$("#win").css({
	 					visibility: 'visible'});
	 				$("#restart").css({
	 					visibility: 'visible'});
	 				$("#troll").attr('src','/ragequitgame/test_image/troll5.png').css({
	 					height: '100px',
	 					visibility: 'visible'
	 				});
	 				$("textarea").append("===> You Win" + "&#xA;");
	 			}
 			});	
 		}
 		
 		function restart()
 		{
 			
 			
 		}
 		
 		function randomTroll()
 		{	
 			$('textarea').scrollTop(9999);
 			var troll_top_wall = $('#troll').position().top>80
 			var troll_bottom_wall = $('#troll').position().top<350
 			var troll_left_wall = $('#troll').position().left>80
 			var troll_right_wall = $('#troll').position().left<350
 			var troll_pos = ($('#troll').position());
 		
	 			var randomizer = (Math.random());

	 			var x=parseInt($('#troll').css('left'));
	 			var y=parseInt($('#troll').css('top'));
	 			var top = y;
		        var left = x;
		        var rand = 100 * (Math.random());
	 
				if(randomizer<=0.40)
				{
					// console.log('top');

					if(troll_top_wall){
					top = y - rand;
					$('#troll').css({
 				 	visibility: 'visible'});
					}
					else
					{
					$("textarea").append('=> Troll Hides'+ "&#xA;");
					$('#troll').css({
 				 	visibility: 'hidden'});
					}
				}
				else if(randomizer>0.40 && randomizer<=0.50)
				{
					// console.log('down');

					if(troll_bottom_wall){
					top = y + rand;
					$('#troll').css({
 				 	visibility: 'visible'});
 				 	$("textarea").append('=> Troll says: "You Mad Bro?' + "&#xA;");
					}
					else
					{
					$("textarea").append('=> Troll Hides' + "&#xA;");
					$('#troll').css({
 				 	visibility: 'hidden',
 				 	});
					}
				}
				else if(randomizer>0.50 && randomizer<=0.90)
				{
					// console.log('left');
					if(troll_left_wall){
					 left = x - rand;
					$('#troll').css({
 				 	visibility: 'visible'});
					}
					else
					{
					$("textarea").append('=> Troll Hides' + "&#xA;");
					$('#troll').css({
 				 	visibility: 'hidden'});
					}
				}
				else
				{
					// console.log('right');
					if(troll_right_wall){
					left = x + rand;
					$('#troll').css({
 				 	visibility: 'hidden'});
 				 	$("textarea").append('=> Troll says: "Problem? TROLOLOL' + "&#xA;");
					}
					else
					{
					$("textarea").append('=> Troll Hides'+ "&#xA;");
					$('#troll').css({
 				 	visibility: 'hidden'});
					}
				}

				if(troll_pos.top<65 && troll_pos.left <65)
	 			{
	 				console.log('DAMSEL CAUGHT');
	 				
	 				clearInterval(Game);
	 				clearInterval(random_level);
	 				clearTimeout(GameDelay);
	 				$("#damsel").attr('src','/ragequitgame/test_image/damsel4.png');
	 				$("#rider").attr('src','/ragequitgame/test_image/rider8.png').css({
	 					height: '150px',
	 					top: '290px',
	 					left:'300px'});
	 				$("#gg").css({
	 					visibility: 'visible'});
	 				$("#troll").attr('src','/ragequitgame/test_image/troll4.png').css({
	 					height: '150px',
	 					visibility: 'visible'
	 				});
	 				$("textarea").append("===> All Your Base Are Belong To Us. TROLOLOLOL" + "&#xA;");
	 			}

	 			 $("#troll").css({
		            top: top+"px",
		            left: left+"px"
		          });
 		}
 		
 		// function level_restart()
 		// {
 			

 		// }
 		function level1() //Easy level. Everything moves as expected.
 		{
			$(document).unbind('keydown');
			collision();
			
			$("#rider").attr('src','/ragequitgame/test_image/rider3.png');

			
	 		$(document).keydown(function(data){
		          var x = parseInt($("#rider").css('left'));
		          var y = parseInt($("#rider").css('top'));
		          var top = y;
		          var left = x;

		          if(data.keyCode == 87){
		            //direction = "top";
		            {
		            	if(top > 10)
		            	{
		            		top= y-20;
		            	}
		            }
		          }
		          else if(data.keyCode == 83){
		            //direction = "down";
		            {
		            	if(top<430)
		            	{
		            		top = y + 20;
		            	}

		            }    
		          }
		          else if(data.keyCode == 65){
		            //direction = "left";
		            if(left>10)
		            	{
		            		left = x - 20;
		            	}
		          }
		          else if(data.keyCode == 68){
		            //direction = "right";
		            if(left<530)
		            	{
		            		left = x + 20;
		            	}
		          }
		          $("#rider").css({
		            top: top+"px",
		            left: left+"px"
		          });
		    }); 
		}       
 				
		

 		function level2()  // Hindered movement.
	 	{
	 			collision();
 				$("#rider").attr('src','/ragequitgame/test_image/rider4.png');
		 		$("textarea").append("    =>Troll Face used 'Confused Keys', and it is super effective. <=" + "&#xA;");
		 		$("#troll").attr('src','/ragequitgame/test_image/troll2.png').css({
		 					height: '60px'});
		        $(document).keydown(function(data){
		          var x = parseInt($("#rider").css('left'));
		          var y = parseInt($("#rider").css('top'));
		          var top = y;
		          var left = x;
		          var rand = 50 * (Math.random());
		          var p_m_rand = rand * (Math.random() < 0.5? -1:1);


		          if(data.keyCode == 87){
		            //direction = "top";
		            if(top > 10)
	            	{
	            		top = y - p_m_rand;
	        		}
		          }
		          else if(data.keyCode == 83){
		            //direction = "down";
		            if(top < 400)
		            {
		            	top = y + p_m_rand;
		        	}
		          }
		          else if(data.keyCode == 65){
		            //direction = "left";
		            if(left > 10)
		            {
		            	left = x - p_m_rand;
		            }
		          }
		          else if(data.keyCode == 68){
		            //direction = "right";
		            if(left < 520)
		            {
		            left = x + p_m_rand;
		        	}
		          }

		          $("#rider").css({
		            top: top+"px",
		            left: left+"px"
		          });

		        });
 		}

 		function level3()  //Movement becomes completely unpredictable.
 		{
 				
 				
 				collision();
 				$("#rider").attr('src','/ragequitgame/test_image/rider7.png');
 				
 				$("textarea").append('    =>Evil Troll appeared. Your keys are now confused as F@#*.<=' + '&#xA;');
	 			$("#troll").attr('src','/ragequitgame/test_image/troll3.png').css({
		 					height: '60px'});
		        $(document).keydown(function(data){
		          var x = parseInt($("#rider").css('left'));
		          var y = parseInt($("#rider").css('top'));
		          var top = y;
		          var left = x;
		          var rand = 50 * (Math.random());
		          var p_m_rand = rand * (Math.random() < 0.5? -1:1);


		          if(data.keyCode == 65){
		            //direction = "top";
		            if(top > 10)
	            	{
		            top = y - p_m_rand;
			        }
		          }
		          else if(data.keyCode == 68){
		            //direction = "down";
		            if(top < 400)
	            	{
		            top = y + p_m_rand;
		        	}
		          }
		          else if(data.keyCode == 87){
		            //direction = "left";
		            if(left > 10)
	            	{
		            left = x - p_m_rand;
		        	}
		          }
		          else if(data.keyCode == 83){
		            //direction = "right";
		            if(left < 400)
	            	{
		            left = x + p_m_rand;
		        	}
		          }

		          $("#rider").css({
		            top: top+"px",
		            left: left+"px"
		          });

		        });
 		}
    });