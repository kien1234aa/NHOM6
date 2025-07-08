@Entity
@Table(name = "admin_reports")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AdminReport {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String reportType;

    @Column(name = "generated_at")
    private LocalDateTime generatedAt;

    private String content;
}
