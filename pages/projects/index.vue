<template>
  <div>
    <h1 class="text-center">Projects</h1>
    <div class="container mx-auto">
      <article class="flex flex-col lg:flex-row justify-center py-16">
        <ul>
          <li>
            <div class="time">2021</div>
            <p><a href="https://valorant.pro.br" target="_blank">Valorant Pro</a></p>
          </li>
          <li>
            <div class="time">2020</div>
            <p><a href="https://play.google.com/store/apps/details?id=com.cuponomia" target="_blank">Cuponomia Mobile App</a></p>
          </li>
          <li>
            <div class="time">2019</div>
            <p><a href="https://chrome.google.com/webstore/detail/cuponomia-cupom-e-cashbac/gidejehfgombmkfflghejpncblgfkagj" target="_blank">Cuponomia Extension</a></p>
          </li>
          <li>
            <div class="time">2015</div>
            <p>
              <a href="https://iprefeituras.com.br" target="_blank">iPrefeituras</a>
            </p>
          </li>
        </ul>
      </article>
    </div>
  </div>
</template>

<style scoped lang="scss">
@mixin mobile-and-up {
  @media screen and (min-width: 601px) { @content; }
}
@mixin mobile-only {
  @media screen and (max-width: 600px) { @content; }
}

ul, li{
  list-style: none;
  padding: 0;
}

li{
  padding-bottom: 2rem;
  border-left: 3px dashed #0a304b;
  position: relative;
  padding-left: 2rem;
  margin-left: 10px;
  &:last-child{
    border: 0px;
    padding-bottom: 0;
  }
  &:before{
    content: '';
    width: 25px;
    height: 25px;
    background: white;
    border: 1px solid #0a304b;
    border-radius: 50%;
    position: absolute;
    left: -0.7rem;
    top: 0;
  }
}
.time{
  color: #fff;
  font-family: 'Open Sans', system-ui, sans-serif;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 1rem;
  @include mobile-and-up{
    font-size: 1.8rem;
  }
  @include mobile-only{
    margin-bottom: .3rem;
    font-size: 0.85rem;
  }

}

</style>