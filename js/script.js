// ĐỊNH NGHĨA MỘT CONSTRUCTOR OBJECT STUDENT
function Student(name, math, physic, chemistry) {
	this.name = name;
	this.math = math;
	this.physic = physic;
	this.chemistry = chemistry;
	this.average = function(){
		return ((parseFloat(this.math) + parseFloat(this.physic) + parseFloat(this.chemistry))/3).toFixed(1);
	}
}


// KHAI BÁO CÁC BIẾN CÓ SCOPE GLOBAL
let number_student = 0;
let add_row = "";
const array_student = [];

console.log(number_student);

// THÊM SỰ KIỆN VÀO CÁC BUTTON
const btn_add = document.querySelector(".txt-info button");
const btn_average = document.getElementById("btn-average");
const btn_rank = document.getElementById("btn-rank");
btn_add.addEventListener("click", add_student);
btn_average.addEventListener("click", get_average);
btn_rank.addEventListener("click", get_rank)

// HÀM THÊM MỚI MỘT HỌC SINH VÀO BẢNG ĐIỂM
function add_student() {

	// LẤY GIÁ TRỊ CÁC FIELD TEXT
	const txt_name = document.getElementById("txt-name");
	const txt_math = document.getElementById("txt-math");
	const txt_physic = document.getElementById("txt-physic");
	const txt_chemistry = document.getElementById("txt-chemistry");
	if(txt_name.value === "")
	{
		alert("Họ tên không được để trống !");
	}
	else
		if(txt_math.value === "")
		{
			alert("Nhập điểm môn toán !");
		}
		else
			if(parseFloat(txt_math.value) < 0 || parseFloat(txt_math.value) > 10)
			{
				alert("Nhập lại điểm môn toán");
			}
			else
				if(txt_physic.value === "")
				{
					alert("Nhập điểm môn lý !");
				}
				else
					if(parseFloat(txt_physic.value) < 0 || parseFloat(txt_physic.value) > 10)
					{
						alert("Nhập lại điểm môn lý");
					}
					else
						if(txt_chemistry.value === "")
						{
							alert("Nhập điểm môn hóa !");
						}
						else
							if(parseFloat(txt_chemistry.value) < 0 || parseFloat(txt_chemistry.value) > 10)
							{
								alert("Nhập lại điểm môn hóa");
							}
							else
								{
									// TẠO MỚI 1 ĐỐI TƯỢNG STUDENT VÀ THÊM GIÁ TRỊ VÀO CÁC THUỘC TÍNH
									const student = new Student(txt_name.value, txt_math.value, txt_physic.value, txt_chemistry.value);
									const table_result = document.querySelector(".table-result");
									if(number_student < 1 )
										{	
											number_student++;
											add_row += "<div class='table-row-title'><div class='table-col-1'><h4>STT</h4></div>"
												 		+ "<div class='table-col-3'><h4>Họ tên</h4></div>"
												 		+ "<div class='table-col-2'><h4>Toán</h4></div>"
												 		+ "<div class='table-col-2'><h4>Lý</h4></div>"
												 		+ "<div class='table-col-2'><h4>Hóa</h4></div>"
												 		+ "<div class='table-col-2'><h4>Trung bình</h4></div></div>"
												 		+ "<div class='table-row-data'>"
															+  "<div class='table-col-1'>"+ number_student +"</div>"
													 		+ "<div class='table-col-3'>"+ student.name +"</div>"
													 		+ "<div class='table-col-2'>"+ student.math +"</div>"
													 		+ "<div class='table-col-2'>"+ student.physic +"</div>"
													 		+ "<div class='table-col-2'>"+ student.chemistry +"</div>"
													 		+ "<div class='table-col-2'>?</div></div>";;	
										}
										else
											{
												number_student++;
														add_row += "<div class='table-row-data'>"
															+  "<div class='table-col-1'>"+ number_student +"</div>"
													 		+ "<div class='table-col-3'>"+ student.name +"</div>"
													 		+ "<div class='table-col-2'>"+ student.math +"</div>"
													 		+ "<div class='table-col-2'>"+ student.physic +"</div>"
													 		+ "<div class='table-col-2'>"+ student.chemistry +"</div>"
													 		+ "<div class='table-col-2'>?</div></div>";				
											}


									// HIỂN THỊ LÊN HTML
									table_result.innerHTML = add_row;

									//RESET FORM 
									txt_name.value = "";
									txt_math.value = "";
									txt_physic.value = "";
									txt_chemistry.value ="";

									//ADD OBJECT STUDENT VÀO ARRAY_STUDENT
									array_student.push(student);
								}

}




//HÀM TÍNH ĐIỂM TRUNG BÌNH
function get_average() {
	if(array_student.length != 0){

		const listnode_div = document.querySelectorAll(".table-row-data div:last-child");
		console.log(listnode_div)

		for(let i = 0; i < array_student.length; i++){
			listnode_div[i].innerHTML = array_student[i].average();
		}
	}
	else
		window.alert("Không có học sinh để tính điểm trung bình");
}








// HÀM XÉT HỌC SINH GIỎI
function get_rank(){
	if(array_student.length != 0 )
	{	
		const rank_average = document.querySelectorAll(".table-row-data div:last-child");
		const div_element = document.querySelectorAll(".table-row-data");	
		if(rank_average[0].textContent != "?")
		{
			for (let i = 0; i < number_student; i++)
			{
				if(rank_average[i].textContent >= 8)
				{
					div_element[i].className += " table-row-mark";
				}
			}
		}
		else
			window.alert("Cần tính điểm trung bình trước khi xét học sinh giỏi");

	}
	else
		window.alert("Không có học sinh để xét học sinh giỏi");
}
