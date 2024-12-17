<script lang="ts">
  import mines from '$lib/assets/mines.webp';
  import { Card } from '$lib/components';
  import { Section } from '$lib/components/sections';
</script>

<Section title="Education">
  <Card
    heading="Colorado School of Mines"
    subheading="Bachelor of Science in Computer Science"
    date="Aug 2019 - May 2023"
    imagePath={mines}
    altText="Lorem, ipsum dolor sit"
    imageClass="h-12 w-auto md:-left-16"
    class="animate-trail"
  >
    <!-- <ul class='ml-4 list-disc text-muted-foreground'>
      <li>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore debitis recusandae, ut
        molestiae laboriosam pariatur!

        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, pariatur!</li>
      </li>
    </ul> -->
  </Card>
</Section>
