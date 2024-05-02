<script lang="ts">
  export let title: string = "";
  export let descriptionImage: string = "";
  export let image: string = "";
</script>

<div class="card">
  <img class="image" src={image} alt={descriptionImage} />
  <h2 class="title">{title}</h2>
</div>

<style>
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    width: 300px;
    transition: box-shadow ease-in-out 0.3s;
  }

  .image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 0.5rem;
  }

  .title {
    margin-top: 1rem;
    font-size: 1.5rem;
    text-align: center;
    line-height: normal;
  }

  .card:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
</style>
