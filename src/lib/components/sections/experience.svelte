<script lang="ts">
  import iqgeo from '$lib/assets/iqgeo-logo.png';
  import { Card } from '$lib/components';
  import { Section } from '$lib/components/sections';
</script>

<Section title="Experience">
  <!-- Example Cards -->
  <!-- <Card
    heading='Lorem Ipsum'
    subheading='Sit amet consectetur'
    date='Dec 2022 - Nov 2023'
    imagePath='/src/assets/about-astro.png'
    altText='Lorem, ipsum dolor sit'
    imageClass='h-12 w-auto md:-left-16'
  >
    <ul class='ml-4 list-disc text-muted-foreground'>
      <li>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore debitis recusandae, ut
        molestiae laboriosam pariatur!

        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, pariatur!</li>
      </li>
    </ul>
  </Card>
  <Card
    heading='Lorem Ipsum'
    subheading='Sit amet consectetur'
    date='Dec 2022 - Nov 2023'
    imagePath='/src/assets/about-astro.png'
    altText='Lorem, ipsum dolor sit'
    imageClass='h-12 w-auto md:-left-16'
  /> -->
  <Card
    heading="IQGEO"
    subheading="Technical Support Engineer"
    date="December 2024 - Present"
    imagePath={iqgeo}
    altText="IQGEO Logo"
    imageClass="h-12 w-auto md:-left-16"
  />
</Section>
