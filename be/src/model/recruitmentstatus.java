@Entity
@Table(name = "recruitment_status")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class RecruitmentStatus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;
}
