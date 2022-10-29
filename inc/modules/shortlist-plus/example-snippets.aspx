<%--
********NOTE**********
Include not intended for direct use.
This is added here for easy reference to the components.
Copy and paste into your project as you need.
**********************
--%>
<!-- Global Heart -->
<div v-scope="GlobalHeart({class : 'display-1 text-dark'})"></div>

<!-- Local Heart -->
<div v-scope="LocalHeart({data : <%= PropObj %>, class : 'display-1 text-danger'})"></div>

<!-- ShortList Reveal -->
<div v-scope="ShortListReveal({text : 'my shortlist', class: 'btn-secondary'})"></div>

<!-- Short List Cars : START -->
<div v-scope="ShortListData()" v-cloak :class="store.reveal === false ? 'd-none' : ''">
  <!-- No Items -->
  <div v-if="store.count === 0">
    <p>Add some items to your shortlist</p>
  </div>
  <!-- With Items -->
  <div v-else>
    <div class="row">
      <div v-for="car in data" class="card">
        <div class="col-12 col-md-4 col-lg-3">
          <div class="card">
            <img :src="car.image" class="card-img-top" :alt="car.manufacturer">
            <div class="card-body">
              <h5 class="card-title">{{car.manufacturer}}</h5>
              <p class="card-text">{{car.model}}</p>
              <a :href="car.url" class="btn btn-primary">{{car.manufacturer}} {{car.model}}</a>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</div>
<!-- Short List Cars : END -->