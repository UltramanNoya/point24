
const btn_rank_show = document.querySelector('.btn-rank-show');
const rank = document.querySelector('.rank');

btn_rank_show.addEventListener('click', function () {

   if(this.getAttribute('isshow')=='true'){
        rank.classList.remove('show');
        rank.classList.add('hidden');
        btn_rank_show.innerHTML='显示排行&lt;';
        this.setAttribute('isshow','false');
   }else{
        rank.classList.remove('hidden');
        rank.classList.add('show');
        btn_rank_show.innerHTML='隐藏排行&gt;';
        btn_rank_show.innerHTML='隐藏排行&gt;';
        this.setAttribute('isshow','true');
   }

})